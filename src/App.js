import image1 from "./assets/images/header-rectangle-l.svg";
import image2 from "./assets/images/header-rectangle-r.svg";
import image3 from "./assets/images/first-image.png";

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
      {/*2.çizgi*/}
      <div>
        <h1>Difo Launchpad is more than just a launch ramp.</h1>
        <div>
          <div>{/*2.fotoğraf*/}</div>
          <div>
            <h1>We are always here to solve h1roblems.</h1>
            <p>
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
