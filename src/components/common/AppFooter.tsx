import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

function AppFooter() {
  return (
    <div className="w-full bg-neutral-900">
      <div className="h-full max-w-[1328px] p-4 sm:p-6 mx-auto">
        <div className="flex items-center gap-4 p-4 sm:p-6">
          <Link to={"/"}>이용약관</Link>
          <Separator orientation="vertical" className="!h-4 text-neutral-500" />
          <Link to={"/"}>개인정보처리방침</Link>
          <Separator orientation="vertical" className="!h-4 text-neutral-500" />
          <Link to={"/"}>클래스 론칭 문의</Link>
        </div>
        <hr className="border-neutral-500" />
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <div className="h-24 flex flex-col justify-between">
            <img src="" alt="" className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <div>
                <div className="flex items-center gap-2">
                  <p>대표이사 : 박성재</p>
                  <Separator
                    orientation="vertical"
                    className="!h-4 text-neutral-500"
                  />
                  <p>사업자등록번호 : 123-45-67890</p>
                  <Separator
                    orientation="vertical"
                    className="!h-4 text-neutral-500"
                  />
                  <p>통신판매업신고번호 : 2025-서울강남-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p>대표번호 : 010-1234-5678</p>
                <Separator
                  orientation="vertical"
                  className="!h-4 text-neutral-500"
                />
                <p>주소 : 서울특별시 강남구 테헤란로 123</p>
                <Separator
                  orientation="vertical"
                  className="!h-4 text-neutral-500"
                />
                <p>© Mingo Team all rights reserved</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/4 justify-between h-24 gap-1">
            <p className="text-lg font-semibold">고객센터</p>
            <div className="flex flex-col gap-1">
              <p>평일 오전 10시 ~ 오후 6시</p>
              <p>문의 : mingoteam@naver.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
