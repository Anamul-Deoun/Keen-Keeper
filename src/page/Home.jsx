import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";

const SummaryCard = ({ number, title }) => {
  return (
    <div className="rounded-2xl border border-[#e7ece8] bg-white p-5 text-center shadow-sm">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#18301f]">
        {number}
      </h2>
      <p className="mt-1 text-sm text-[#7b8f80]">{title}</p>
    </div>
  );
};

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(() => {
    const totalFriends = friends.length;

    const activeFriends = friends.filter(
      (item) => item.status === "on-track"
    ).length;

    const pendingFriends = friends.filter(
      (item) => item.status !== "on-track"
    ).length;

    return {
      totalFriends,
      activeFriends,
      pendingFriends,
      monthlyInteractions: 12,
    };
  }, [friends]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <div className="py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a2e1e]">
          Friends to keep close in your life
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-[#6f8572]">
          Keep track of meaningful friendships, reconnect regularly,
          and maintain stronger relationships effortlessly.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2d6a4f] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#25563f]">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-24">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      ) : (
        <>
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <SummaryCard
              number={stats.totalFriends}
              title="Total Friends"
            />

            <SummaryCard
              number={stats.activeFriends}
              title="On Track"
            />

            <SummaryCard
              number={stats.pendingFriends}
              title="Need Attention"
            />

            <SummaryCard
              number={stats.monthlyInteractions}
              title="Interactions This Month"
            />
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#1a2e1e]">
                Your Friends
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;