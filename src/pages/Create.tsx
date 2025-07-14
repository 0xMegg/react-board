import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ImageOff, Rocket } from "lucide-react";

function CreatePage() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container py-6 flex flex-col gap-6">
        <Input
          placeholder="토픽 제목을 입력해주세요."
          maxLength={50}
          className="h-14 px-4 test-base border-none font-semibold md:h-20 md:text-xl md:px-6 md:placeholder:font-semibold"
        />
        <Separator />
        <div className="flex items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Button size="icon">
                <ArrowLeft />
              </Button>
              <Button>임시 저장</Button>
              <Button>
                <Rocket />
                토픽 발행하기
              </Button>
            </div>
            <Separator />
            <div>
              <div></div>
              <div>
                <Button variant="outline">
                  <ImageOff />
                </Button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default CreatePage;
