import { SkillNames } from "@/libs/client";

export type PracticalWork = {
  id: string;
  name: string;
  contract_type: "業務委託" | "インターン" | "アルバイト" | "フリーランス";
  period: string;
  description?: string | React.ReactNode;
  link?: string | undefined;
  icon: string;
  technologies: SkillNames[];
};

export const practicalWorks: PracticalWork[] = [
  // {
  //   id: "chot",
  //   icon: "🔥",
  //   contract_type: "アルバイト",
  //   name: "ちょっと株式会社",
  //   period: "2024年5月〜",
  //   link: "https://chot-inc.com/",
  //   description: (
  //     <p>
  //       5月13日より、ちょっと株式会社にてフロントエンドエンジニアとして働きます。
  //     </p>
  //   ),
  //   technologies: [],
  // },
  {
    id: "card-game",
    icon: "⚽",
    contract_type: "業務委託",
    name: "Next.jsを使用したWebアプリ開発",
    period: "約3ヶ月間",
    description: (
      <p>
        主にTypeScriptとPrismaを使用したバックエンドの開発を行いました。
        仕様書を元に、APIの設計、テストの作成、バグ修正やパフォーマンスの改善などを行いました。
        その他、機能の修正の提案や、新機能の追加なども行いました。
      </p>
    ),
    technologies: ["TypeScript", "Next.js", "Prisma", "Vitest"],
  },
  {
    id: "p2p",
    icon: "📞",
    contract_type: "業務委託",
    name: "Next.jsを使用したP2PのWebアプリ開発",
    period: "約2ヶ月間",
    description: (
      <p>
        主に、フロントエンドを中心に開発を行いました。
        バグの修正や、新機能の追加などを行いました。
      </p>
    ),
    technologies: ["TypeScript", "Next.js", "Vitest"],
  },
];
