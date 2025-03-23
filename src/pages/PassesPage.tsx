import { SafeAreaWrapper } from "@/components/atoms";
import { GoToLaunchpad } from "@/components/pages/launchpad";



const PassesPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <SafeAreaWrapper>
        <GoToLaunchpad />
      </SafeAreaWrapper>
    </div>
  );
};

export default PassesPage;
