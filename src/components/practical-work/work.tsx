import { SkillNames } from "@/libs/client";

export type PracticalWork = {
  id: string;
  name: string;
  contract_type: "業務委託" | "インターン" | "アルバイト" | "フリーランス";
  period: string;
  description: string | React.ReactNode;
  image?: string | undefined;
  link?: string | undefined;
  icon: string;

  technologies: SkillNames[];
};

export const practicalWorks: PracticalWork[] = [
  {
    id: "1",
    icon: "⚽",
    contract_type: "業務委託",
    name: "Next.jsを使用したWebアプリ開発",
    period: "2023年11月〜",
    description: (
      <>
        <p>Next.jsを使用したWebカードゲームのアプリ開発を行いました。</p>
        <p>
          主に、TypeScript、Prismaを用いたバックエンドの開発を行いました。
          ユーザーへの報酬付与機能、ユーザーのランキング機能など様々なAPIの開発を行いました。
          Vitestを使用したテストコードの作成も行いました。
        </p>
      </>
    ),
    technologies: ["TypeScript", "Next.js", "Prisma", "Vitest"],
  },
  {
    id: "2",
    icon: "📞",
    contract_type: "業務委託",
    name: "Next.jsを使用したP2PのWebアプリ開発",
    period: "2023年11月〜2023年12月",
    description: (
      <div>
        <p>Next.jsを使用したP2PのWebアプリ開発を行いました。</p>
        <p>
          主に、フロントエンドを中心に開発を行いました。
          バグの修正や、新機能の追加などを行いました。
        </p>
      </div>
    ),
    technologies: ["TypeScript", "Next.js", "Vitest"],
  },
];
