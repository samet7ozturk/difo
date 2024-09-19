import React, { useState } from "react";
import images from "../assets/images";
import responsiveImages from "../assets/responsiveImages";

export default function Carousel() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      {!click ? (
        <>
          <div className="flex sm:hidden gap-4 my-4">
            <div className="flex rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
              <div className="bg-black rounded-2xl flex flex-col gap-2 p-2 justify-evenly">
                <img src={images.image10} alt="image10" />
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[11px]">
                  First come, first served.
                </h3>
                <p className="text-white font-normal text-[10px]">
                  Difo Launchpad stands out from other launch ramps with its IDO
                  module based on a first-come, first-served principle.
                </p>
              </div>
            </div>

            <div className="flex rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
              <div className="bg-black rounded-2xl flex flex-col items-center justify-evenly gap-2 p-2">
                <img src={images.image13} alt="image13" />
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
                  We are making it easier to participate in IDOs.
                </h3>
                <p className="text-white font-normal text-[9px]">
                  Difo Launchpad eliminates the requirement for investors on
                  traditional launch ramps to stake large amounts of the
                  platform's native token to participate in IDOs, replacing it
                  with more equitable and accessible terms for every investor.
                </p>
                <button className="rounded-lg bg-gradient-to-l from-[#00D1FF] to-[#EE1D52] p-[2px] w-full">
                  <div className="flex justify-center items-center gap-4 rounded-lg text-[#00B2FF] font-bold text-[9px] h-8">
                    <p>Learn More</p>
                    <img
                      src={images.image22}
                      alt="image22"
                      className="h-3 w-3"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex sm:hidden justify-between mb-4">
            <img src={responsiveImages.image3} alt="responsiveImage4" />
            <img src={responsiveImages.image8} alt="responsiveImage5" />
            <img src={responsiveImages.image3} alt="responsiveImage6" />
          </div>

          <div className="block sm:hidden rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1">
            <div className="bg-black rounded-2xl flex items-center gap-6 p-4">
              <div className="w-[35%]">
                <img src={images.image17} alt="image17" />
              </div>
              <div className="w-[65%]">
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[14px]">
                  One-time KYC
                </h3>
                <p className="text-white font-normal text-[11px]">
                  Nothing is more frustrating than multiple KYC checks for each
                  investment. That's why Difo Launchpad chose a different
                  approach. By registering on Difo Launchpad, you only need to
                  pass KYC checks once. After that, simply use your login
                  credentials to easily participate in IDOs.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex flex-col justify-center my-3">
            <img src={responsiveImages.image9} alt="responsiveImage7" />
            <img src={responsiveImages.image10} alt="responsiveImage8" />
            <img src={responsiveImages.image9} alt="responsiveImage9" />
          </div>
        </>
      ) : (
        <>
          <div className="flex sm:hidden gap-4 my-4">
            <div className="flex rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
              <div className="bg-black rounded-2xl flex flex-col items-center gap-2 p-2 justify-evenly">
                <img src={images.image11} alt="image11" />
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
                  Listing Guarantee
                </h3>
                <p className="text-white font-normal text-[10px]">
                  Difo Launchpad guarantees investors the listing of the
                  project's token on three central exchanges (CEX) recognized by
                  the community in the cryptocurrency ecosystem immediately
                  after the IDO period ends.
                </p>
              </div>
            </div>

            <div className="flex rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
              <div className="bg-black rounded-2xl flex flex-col items-center justify-evenly gap-2 p-2">
                <img src={images.image14} alt="image14" className="h-[106px]" />
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
                  Post-IDO Services
                </h3>
                <p className="text-white font-normal text-[10px]">
                  Difo Launchpad will not only assist in guiding projects
                  through the IDO process but also provide post-IDO support to
                  projects, help with CEX listing, liquidity tools, technical
                  consultation, marketing, and general partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="flex sm:hidden justify-between ">
            <img src={responsiveImages.image3} alt="responsiveImage4" />
            <img src={responsiveImages.image8} alt="responsiveImage5" />
            <img src={responsiveImages.image3} alt="responsiveImage6" />
          </div>

          <div className="flex sm:hidden gap-4 mt-4">
            <div className="flex rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
              <div className="bg-black rounded-2xl flex flex-col items-center justify-evenly gap-2 p-2">
                <img src={images.image18} alt="image18" />
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
                  Blockchains We Support
                </h3>
                <p className="text-white font-normal text-[10px]">
                  There are no borders for the Difo launchpad, just like in the
                  open space. We support almost the entire blockchain network to
                  give our investors access to any project.
                </p>
              </div>
            </div>

            <div className="flex rounded-2xl bg-gradient-to-t from-[#FFAC00] to-[#AB00FF] p-1 w-[50%]">
              <div className="bg-black rounded-2xl flex flex-col items-center gap-2 p-2 justify-evenly">
                <img src={images.image15} alt="image15" />
                <h3 className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FFAC00] to-[#FF2E00] font-black text-[10px]">
                  Engaging Design UX/UI
                </h3>
                <p className="text-white font-normal text-[10px]">
                  All a crypto trader needs to do to participate in an IDO or
                  pre-sale on the Difo Launchpad platform is click a few
                  buttons.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex flex-col justify-center my-3">
            <img src={responsiveImages.image9} alt="responsiveImage7" />
            <img src={responsiveImages.image10} alt="responsiveImage8" />
            <img src={responsiveImages.image9} alt="responsiveImage9" />
          </div>
        </>
      )}

      <div className="flex justify-between sm:hidden">
        <img src={responsiveImages.image5} alt="responsiveImage10" />
        <img src={responsiveImages.image4} alt="responsiveImage11" />
        <button onClick={handleClick}>
          <img src={responsiveImages.image6} alt="responsiveImage12" />
        </button>
        <button onClick={handleClick}>
          <img src={responsiveImages.image7} alt="responsiveImage13" />
        </button>
        <img src={responsiveImages.image4} alt="responsiveImage14" />
        <img src={responsiveImages.image5} alt="responsiveImage15" />
      </div>
    </>
  );
}
