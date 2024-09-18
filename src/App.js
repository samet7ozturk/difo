import image1 from "./assets/images/header-rectangle-l.svg";
import image2 from "./assets/images/header-rectangle-r.svg";
import image3 from "./assets/images/first-image.png";
import image4 from "./assets/images/middle-rectangle.svg";
import image5 from "./assets/images/second-image.png";

function App() {
  return (
    <div className="flex flex-col mx-[5%]">
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
    </div>
  );
}

export default App;
