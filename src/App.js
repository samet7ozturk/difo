import images from "./assets/images";
import responsiveImages from "./assets/responsiveImages";

function App() {
  return (
    <div className="flex flex-col mx-[7%] my-10 font-lexend">
      <div className="flex gap-2">
        <img
          src={images.image1}
          alt="image1"
          className="sm:block hidden w-full"
        />
        <img
          src={responsiveImages.image1}
          alt="responsiveImage1"
          className="sm:hidden block w-full"
        />
        <h1 class="flex-none text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] font-black font-lexend sm:text-[53px] text-[16px]">
          What is Difo Launchpad?
        </h1>
        <img src={images.image2} alt="image2" className="sm:block hidden" />
        <img
          src={responsiveImages.image1}
          alt="image1"
          className="sm:hidden block w-full"
        />
      </div>

      <div className="flex sm:my-16 my-6">
        <div className="w-[50%]">
          <p className="font-bold text-white sm:text-[42px] text-[10px]">
            Difo Launchpad is a new-generation hybrid launchpad that enables new
            crypto projects to raise capital, expand their communities, and
            allow crypto investors to participate in the IDOs of promising
            projects by placing bids.
          </p>
          <p className="font-light text-white sm:mt-8 mt-2 sm:text-[32px] text-[10px]">
            Elevate your investment portfolio to new heights with Difo
            Launchpad.
          </p>
        </div>
        <div className="flex w-[50%] justify-center">
          <img src={images.image3} alt="image3" />
        </div>
      </div>

      <img
        src={images.image4}
        alt="image4"
        className="sm:block hidden w-full"
      />
      <img
        src={responsiveImages.image2}
        alt="responsiveImage2"
        className="sm:hidden block w-full"
      />

      <div className="flex flex-col items-center sm:my-12 mt-4 font-poppins">
        <h1 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#4200FF] to-[#8FFF00] font-bold sm:text-[60px] text-[13px]">
          Difo Launchpad is more than just a launch ramp.
        </h1>
        <div className="flex sm:my-16 my-4 sm:gap-0 gap-2">
          <div className="w-[40%]">
            <img src={images.image5} alt="image5" />
          </div>
          <div className="w-[60%] sm:text-end text-start">
            <h1 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#AB00FF] to-[#FFAC00] font-semibold sm:mb-14 mb-4 sm:text-[50px] text-[13px]">
              We are always here to solve problems.
            </h1>
            <p className="text-white font-normal sm:text-[38px] text-[8px]">
              Difo Launchpad addresses each issue present on the leading IDO
              platforms of the industry separately and strives to resolve them.
              Additionally, apart from enhancing existing problems, we are also
              working on introducing a plethora of premium features on the Difo
              Launchpad platform to provide a robust user experience.
            </p>
          </div>
        </div>
      </div>

      <img src={images.image6} alt="image6" />
      <img src={images.image7} alt="image7" />
      <img src={images.image8} alt="image8" />

      <div className="my-12 gap-14 sm:flex hidden">
        <div className="flex flex-col items-center gap-14 w-[33.3%]">
          <img src={images.image9} alt="image9" className="sm:block hidden" />

          <div className="sm:block hidden">
            <img src={images.image20} alt="image20" />
            <img src={images.image21} alt="image21" />
            <img src={images.image20} alt="image20" />
          </div>

          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image10} alt="image10" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[26px] text-[14px]">
                First come, first served.
              </h3>
              <p className="text-white font-normal sm:text-[22px] text-[14px]">
                Difo Launchpad stands out from other launch ramps with its IDO
                module based on a first-come, first-served principle.
              </p>
            </div>
          </div>

          <div>
            <img src={images.image20} alt="image20" />
            <img src={images.image21} alt="image21" />
            <img src={images.image20} alt="image20" />
          </div>

          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image11} alt="image11" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[30px] text-[10px]">
                Listing Guarantee
              </h3>
              <p className="text-white font-normal sm:text-[23px] text-[9.5px]">
                Difo Launchpad guarantees investors the listing of the project's
                token on three central exchanges (CEX) recognized by the
                community in the cryptocurrency ecosystem immediately after the
                IDO period ends.
              </p>
            </div>
          </div>

          <div>
            <img src={images.image20} alt="image20" />
            <img src={images.image21} alt="image21" />
            <img src={images.image20} alt="image20" />
          </div>

          <img src={images.image12} alt="image12" />
        </div>

        <div className="flex flex-col items-center gap-14 w-[33.3%] sm:pt-20 pt-0">
          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image13} alt="image13" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[25px] text-[10px]">
                We are making it easier to participate in IDOs.
              </h3>
              <p className="text-white font-normal sm:text-[22px] text-[10px]">
                Difo Launchpad eliminates the requirement for investors on
                traditional launch ramps to stake large amounts of the
                platform's native token to participate in IDOs, replacing it
                with more equitable and accessible terms for every investor.
              </p>
              <button className="rounded-2xl bg-gradient-to-l from-[#00D1FF] to-[#EE1D52] p-1 w-full mt-6">
                <div className="flex justify-center gap-4 rounded-2xl text-[#00B2FF] font-bold sm:text-[23px] text-[9px] sm:py-6 py-0">
                  <p>Learn More</p>
                  <img src={images.image22} alt="image22" className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>

          <div>
            <img src={images.image20} alt="image20" className="h-[8px]" />
            <img src={images.image21} alt="image21" className="h-[8px]" />
            <img src={images.image20} alt="image20" className="h-[8px]" />
          </div>

          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image14} alt="image14" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[40px] text-[10px]">
                Post-IDO Services
              </h3>
              <p className="text-white font-normal sm:text-[22px] text-[9px]">
                Difo Launchpad will not only assist in guiding projects through
                the IDO process but also provide post-IDO support to projects,
                help with CEX listing, liquidity tools, technical consultation,
                marketing, and general partnerships.
              </p>
            </div>
          </div>

          <div>
            <img src={images.image20} alt="image20" className="h-[8px]" />
            <img src={images.image21} alt="image21" className="h-[8px]" />
            <img src={images.image20} alt="image20" className="h-[8px]" />
          </div>

          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image15} alt="image15" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[30px] text-[10px]">
                Engaging Design UX/UI
              </h3>
              <p className="text-white font-normal sm:text-[30px] text-[10px]">
                All a crypto trader needs to do to participate in an IDO or
                pre-sale on the Difo Launchpad platform is click a few buttons.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-14 w-[33.3%]">
          <img src={images.image16} alt="image16" className="sm:block hidden" />

          <div className="sm:block hidden">
            <img src={images.image20} alt="image20" />
            <img src={images.image21} alt="image21" />
            <img src={images.image20} alt="image20" />
          </div>

          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image17} alt="image17" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[25px] text-[14px]">
                One-time KYC
              </h3>
              <p className="text-white font-normal sm:text-[22px] text-[9px]">
                Nothing is more frustrating than multiple KYC checks for each
                investment. That's why Difo Launchpad chose a different
                approach. By registering on Difo Launchpad, you only need to
                pass KYC checks once. After that, simply use your login
                credentials to easily participate in IDOs.
              </p>
            </div>
          </div>

          <div>
            <img src={images.image20} alt="image20" />
            <img src={images.image21} alt="image21" />
            <img src={images.image20} alt="image20" />
          </div>

          <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex flex-col items-center gap-6 sm:p-12 p-4">
              <img src={images.image18} alt="image18" />
              <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[25px] text-[10px]">
                Blockchains We Support
              </h3>
              <p className="text-white font-normal sm:text-[24px] text-[10px]">
                There are no borders for the Difo launchpad, just like in the
                open space. We support almost the entire blockchain network to
                give our investors access to any project.
              </p>
            </div>
          </div>

          <div>
            <img src={images.image20} alt="image20" />
            <img src={images.image21} alt="image21" />
            <img src={images.image20} alt="image20" />
          </div>

          <img src={images.image19} alt="image19" />
        </div>
      </div>

      <div className="flex sm:hidden gap-4 my-4">
        <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
          <div className="bg-black rounded-2xl flex flex-col items-center gap-2 p-2">
            <img src={images.image10} alt="image10" />
            <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
              First come, first served.
            </h3>
            <p className="text-white font-normal text-[10px]">
              Difo Launchpad stands out from other launch ramps with its IDO
              module based on a first-come, first-served principle.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
          <div className="bg-black rounded-2xl flex flex-col items-center gap-2 p-2">
            <img src={images.image11} alt="image11" />
            <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
              Listing Guarantee
            </h3>
            <p className="text-white font-normal text-[10px]">
              Difo Launchpad guarantees investors the listing of the project's
              token on three central exchanges (CEX) recognized by the community
              in the cryptocurrency ecosystem immediately after the IDO period
              ends.
            </p>
          </div>
        </div>
      </div>

      <div className="flex sm:hidden justify-between mb-4">
        <img src={responsiveImages.image3} alt="responsiveImage4" />
        <img src={responsiveImages.image8} alt="responsiveImage5" />
        <img src={responsiveImages.image3} alt="responsiveImage6" />
      </div>

      <div className="sm:hidden rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
        <div className="bg-black rounded-2xl flex items-center gap-6 sm:p-12 p-4">
          <div className="w-[35%]">
            <img src={images.image17} alt="image17" />
          </div>

          <div className="w-[65%]">
            <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black sm:text-[25px] text-[14px]">
              One-time KYC
            </h3>
            <p className="text-white font-normal sm:text-[22px] text-[9px]">
              Nothing is more frustrating than multiple KYC checks for each
              investment. That's why Difo Launchpad chose a different approach.
              By registering on Difo Launchpad, you only need to pass KYC checks
              once. After that, simply use your login credentials to easily
              participate in IDOs.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:block hidden">
        <img src={images.image6} alt="image6" />
        <img src={images.image7} alt="image7" />
        <img src={images.image8} alt="image8" />
      </div>

      <div className="sm:hidden block my-3">
        <img src={responsiveImages.image9} alt="responsiveImage7" />
        <img src={responsiveImages.image10} alt="responsiveImage8" />
        <img src={responsiveImages.image9} alt="responsiveImage9" />
      </div>

      <div className="flex justify-between sm:hidden">
        <img src={responsiveImages.image5} alt="responsiveImage10" />
        <img src={responsiveImages.image4} alt="responsiveImage11" />
        <img src={responsiveImages.image6} alt="responsiveImage12" />
        <img src={responsiveImages.image7} alt="responsiveImage13" />
        <img src={responsiveImages.image4} alt="responsiveImage14" />
        <img src={responsiveImages.image5} alt="responsiveImage15" />
      </div>
    </div>
  );
}

export default App;
