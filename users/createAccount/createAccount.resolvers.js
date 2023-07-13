import client from "../../client.js";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      // 유저네임과 이메일 중복 확인
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      if (existingUser) {
        return {
          ok: false,
          error: "이미 사용 중인 유저네임 또는 이메일입니다.",
        };
      }
      // 비밀번호 해싱
      const hashedPassword = await bcrypt.hash(password, 10);
      // 유저 생성
      await client.user.create({
        data: {
          username,
          email,
          name,
          location,
          password: hashedPassword,
          avatarURL,
          githubUsername,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
