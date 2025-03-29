import { SafeAreaWrapper } from "@/components/atoms";
import { MainLaunchpad } from "@/components/pages/launchpad";

const QuestsPage = () => {
  return (
    <div className="mt-8 w-[90%] mx-auto">
      <SafeAreaWrapper>
        <MainLaunchpad />
      </SafeAreaWrapper>
    </div>
  );
};

export default QuestsPage;
