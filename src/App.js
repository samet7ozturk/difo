import image1 from "./assets/images/header-rectangle-l.svg";
import image2 from "./assets/images/header-rectangle-r.svg";
import image3 from "./assets/images/first-image.png";
import image4 from "./assets/images/middle-rectangle.svg";
import image5 from "./assets/images/second-image.png";
import image6 from "./assets/images/middle-rectangle-1.svg";
import image7 from "./assets/images/middle-rectangle-2.svg";
import image8 from "./assets/images/middle-rectangle-1.svg";
import image9 from "./assets/images/lock-icon.png";
import image10 from "./assets/images/third-image.png";
import image11 from "./assets/images/fourth-image.png";
import image12 from "./assets/images/box-icon.svg";
import image13 from "./assets/images/fifth-image.png";
import image14 from "./assets/images/sixth-image.png";
import image15 from "./assets/images/seventh-image.png";
import image16 from "./assets/images/lock-icon.png";
import image17 from "./assets/images/eighth-image.png";
import image18 from "./assets/images/ninth-image.png";
import image19 from "./assets/images/box-icon.svg";
import image20 from "./assets/images/radial-gradient-1.svg";
import image21 from "./assets/images/radial-gradient-2.svg";

function App() {
  return (
    <div className="flex flex-col mx-[5%] mb-10">
      <div className="flex gap-2">
        <img src={image1} alt="image1" className="" />
        <h1 class="flex-none text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] text-[53px] font-black">
          What is Difo Launchpad?
        </h1>
        <img src={image2} alt="image2" className="" />
      </div>

      <div className="flex my-16">
        <div className="w-[50%]">
          <p className="text-[42px] font-bold text-white">
            Difo Launchpad is a new-generation hybrid launchpad that enables new
            crypto projects to raise capital, expand their communities, and
            allow crypto investors to participate in the IDOs of promising
            projects by placing bids.
          </p>
          <p className="text-[32px] font-light text-white mt-8">
            Elevate your investment portfolio to new heights with Difo
            Launchpad.
          </p>
        </div>
        <div className="flex w-[50%] items-center">
          <img src={image3} alt="image3" className="" />
        </div>
      </div>

      <img src={image4} alt="image4" className="" />

      <div className="my-12">
        <h1 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#4200FF] to-[#8FFF00] text-[60px] font-bold">
          Difo Launchpad is more than just a launch ramp.
        </h1>
        <div className="flex my-16">
          <div className="w-[40%]">
            <img src={image5} alt="image5" className="" />
          </div>
          <div className="w-[60%] text-end">
            <h1 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#AB00FF] to-[#FFAC00] text-[50px] font-semibold mb-14">
              We are always here to solve h1roblems.
            </h1>
            <p className="text-white text-[38px] font-normal">
              Difo Launchpad addresses each issue present on the leading IDO
              platforms of the industry separately and strives to resolve them.
              Additionally, apart from enhancing existing problems, we are also
              working on introducing a plethora of premium features on the Difo
              Launchpad platform to provide a robust user experience.
            </p>
          </div>
        </div>
      </div>

      <img src={image6} alt="image6" className="" />
      <img src={image7} alt="image7" className="" />
      <img src={image8} alt="image8" className="" />

      <div className="flex my-12 gap-14">
        <div className="flex flex-col items-center gap-14 w-[33.3%]">
          <img src={image9} alt="image9" className="" />

          <div>
            <img src={image20} alt="image20" className="" />
            <img src={image21} alt="image21" className="" />
            <img src={image20} alt="image20" className="" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image10} alt="image10" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[26px] font-black">
                First come, first served.
              </h3>
              <p className="text-white text-[22px] font-normal">
                Difo Launchpad stands out from other launch ramps with its IDO
                module based on a first-come, first-served principle.
              </p>
            </div>
          </div>

          <div>
            <img src={image20} alt="image20" className="" />
            <img src={image21} alt="image21" className="" />
            <img src={image20} alt="image20" className="" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image11} alt="image11" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[30px] font-black">
                Listing Guarantee
              </h3>
              <p className="text-white text-[23px] font-normal">
                Difo Launchpad guarantees investors the listing of the project's
                token on three central exchanges (CEX) recognized by the
                community in the cryptocurrency ecosystem immediately after the
                IDO period ends.
              </p>
            </div>
          </div>

          <div>
            <img src={image20} alt="image20" className="" />
            <img src={image21} alt="image21" className="" />
            <img src={image20} alt="image20" className="" />
          </div>

          <img src={image12} alt="image12" className="" />
        </div>

        <div className="flex flex-col items-center gap-14 w-[33.3%]">
          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image13} alt="image13" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[25px] font-black">
                We are making it easier to participate in IDOs.
              </h3>
              <p className="text-white text-[22px] font-normal">
                Difo Launchpad eliminates the requirement for investors on
                traditional launch ramps to stake large amounts of the
                platform's native token to participate in IDOs, replacing it
                with more equitable and accessible terms for every investor.
              </p>
            </div>
          </div>

          <div>
            <img src={image20} alt="image20" className="h-[8px]" />
            <img src={image21} alt="image21" className="h-[8px]" />
            <img src={image20} alt="image20" className="h-[8px]" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image14} alt="image14" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[40px] font-black">
                Post-IDO Services
              </h3>
              <p className="text-white text-[22px] font-normal">
                Difo Launchpad will not only assist in guiding projects through
                the IDO process but also provide post-IDO support to projects,
                help with CEX listing, liquidity tools, technical consultation,
                marketing, and general partnerships.
              </p>
            </div>
          </div>

          <div>
            <img src={image20} alt="image20" className="h-[8px]" />
            <img src={image21} alt="image21" className="h-[8px]" />
            <img src={image20} alt="image20" className="h-[8px]" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image15} alt="image15" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[30px] font-black">
                Engaging Design UX/UI
              </h3>
              <p className="text-white text-[30px] font-normal">
                All a crypto trader needs to do to participate in an IDO or
                pre-sale on the Difo Launchpad platform is click a few buttons.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-14 w-[33.3%]">
          <img src={image16} alt="image16" className="" />

          <div>
            <img src={image20} alt="image20" className="" />
            <img src={image21} alt="image21" className="" />
            <img src={image20} alt="image20" className="" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image17} alt="image17" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[25px] font-black">
                One-time KYC
              </h3>
              <p className="text-white text-[22px] font-normal">
                Nothing is more frustrating than multiple KYC checks for each
                investment. That's why Difo Launchpad chose a different
                approach. By registering on Difo Launchpad, you only need to
                pass KYC checks once. After that, simply use your login
                credentials to easily participate in IDOs.
              </p>
            </div>
          </div>

          <div>
            <img src={image20} alt="image20" className="" />
            <img src={image21} alt="image21" className="" />
            <img src={image20} alt="image20" className="" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center p-6 gap-4">
              <img src={image18} alt="image18" className="" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] text-[25px] font-black">
                Blockchains We Support
              </h3>
              <p className="text-white text-[24px] font-normal">
                There are no borders for the Difo launchpad, just like in the
                open space. We support almost the entire blockchain network to
                give our investors access to any project.
              </p>
            </div>
          </div>

          <div>
            <img src={image20} alt="image20" className="" />
            <img src={image21} alt="image21" className="" />
            <img src={image20} alt="image20" className="" />
          </div>

          <img src={image19} alt="image19" className="" />
        </div>
      </div>

      <img src={image6} alt="image6" className="" />
      <img src={image7} alt="image7" className="" />
      <img src={image8} alt="image8" className="" />
    </div>
  );
}

export default App;
