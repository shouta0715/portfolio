import clsx from "clsx";
import { FadeIn } from "@/components/fadeIn";

const query = `query {
  user(login: "shouta0715"){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        months{
          name
        }
        weeks {
          contributionDays {
            contributionLevel
            date
          }
        }
      }
    }
  }
}
`;

type ContributionLevels =
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE"
  | "NONE";

type Contribution = {
  totalContributions: number;
  months: {
    name: string;
  }[];
  weeks: {
    contributionDays: {
      contributionLevel: ContributionLevels;
      date: string;
    }[];
  }[];
};

type User = {
  contributionsCollection: {
    contributionCalendar: Contribution;
  };
};

type Result = {
  data: {
    user: User;
  };
};

const colors = {
  NONE: "bg-[#ebedf0] dark:bg-[#2d333b]",
  FIRST_QUARTILE: "bg-[#9be9a8] dark:bg-[#0d4429]",
  SECOND_QUARTILE: "bg-[#40c463] dark:bg-[#016d32]",
  THIRD_QUARTILE: "bg-[#30a14e] dark:bg-[#27a641]",
  FOURTH_QUARTILE: "bg-[#206e39] dark:bg-[#3ad353]",
};

async function getContribution() {
  const res = await fetch("https://api.github.com/graphql", {
    next: {
      revalidate: 60 * 60 * 6,
    },
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Result>;
}

export async function Contribution({
  animation = true,
}: {
  animation?: boolean;
}) {
  const res = await getContribution();

  const { weeks, totalContributions, months } =
    res.data.user.contributionsCollection.contributionCalendar;

  const Component = animation ? FadeIn : "div";

  return (
    <Component className="overflow-hidden">
      <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
        {totalContributions} contributions in the last year
      </p>

      <table className="flex flex-col gap-y-1 overflow-x-auto">
        <thead className="flex flex-col">
          <tr className="flex gap-x-[3.8rem] text-sm">
            {months.map((month, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <th key={`${i}-${month.name}`}>{month.name}</th>;
            })}
          </tr>
        </thead>
        <tbody className="flex gap-x-1">
          {weeks.map((week) => {
            return (
              <tr
                key={week.contributionDays[0].date}
                className="grid grid-rows-[repeat(7,_minmax(0,_1fr))] gap-y-1"
              >
                {week.contributionDays.map((day) => {
                  return (
                    <td
                      key={day.date}
                      aria-label={`${day.date}のコントリビューション数`}
                      className={clsx(
                        "h-4 w-4 rounded border border-gray-300 dark:border-gray-700",
                        colors[day.contributionLevel]
                      )}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Component>
  );
}
