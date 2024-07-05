import AboutHero from "@/components/AboutHero";
import { Button } from "@/components/ui/button";
import SubsidaryCard from "@/components/cards/SubsidaryCard";
import ValuesCard from "@/components/cards/ValuesCard";
import { CloudDownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OverviewPage = () => {
  return (
    <>
      <AboutHero />

      <section className="relative max-container padding-container mt-20">
        <div className="w-full flex flex-col gap-4 mb-16">
          <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
            our story
          </p>
          <h2 className="bold-40 text-orange-base max-w-md">
            Figures That Define Our Journey
          </h2>
        </div>

        <div className="flex flex-col md:flex-row bg-orange-50 rounded-lg p-3 gap-4">
          <div className="flex flex-col w-full bg-white rounded-lg p-6 gap-3">
            <h3 className="bold-56 text-orange-base">678</h3>
            <p className="regular-20">Employees</p>
          </div>
          <div className="flex flex-col w-full bg-white rounded-lg p-6 gap-3">
            <h3 className="bold-56 text-orange-base">500k+</h3>
            <p className="regular-20">Customers</p>
          </div>
          <div className="flex flex-col w-full bg-white rounded-lg p-6 gap-3">
            <h3 className="bold-56 text-orange-base">53</h3>
            <p className="regular-20">Locations across Nigeria</p>
          </div>
          <div className="flex flex-col w-full bg-white rounded-lg p-6 gap-3">
            <h3 className="bold-56 text-orange-base">4</h3>
            <p className="regular-20">Businesses</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full flex flex-col gap-4 mb-16">
          <h2 className="bold-40 text-orange-base">Our Vision</h2>
          <p className="regular-18 text-gray-400 font-gilroy-medium max-w-lg">
            To be the provider of choice in Africa for comprehensive Insurance and Pensions solutions
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="w-full bg-blue-50 p-8 rounded-2xl bg-no-repeat md:bg-[url('/images/piggy-save.svg')] bg-br-position"
          >
            <p className="bg-blue-600 text-white w-fit px-3 rounded-full mb-8">Our Mission</p>
            <h3 className="bold-32 md:bold-48 max-w-xs text-blue-base">
              To help people live financially secure lives
            </h3>
          </div>
          <div
            className="w-full bg-orange-50 p-8 rounded-2xl bg-no-repeat md:bg-[url('/images/tang-people.svg')] bg-br-position"
          >
            <h3 className="bold-32 md:bold-48 max-w-xs mb-8">Our Culture Statement</h3>
            <p className="regular-16 max-w-xs">
              At Tangerine, we are honest, transparent and keep to our commitments. We are a team of
              strong collaborators that are intentional in creating innovative solutions that add value
              to our stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14">
          <h2 className="bold-40 text-orange-base">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ValuesCard
            icon="/icons/lightbulb-on.svg"
            title="Creativity"
            description="We are unconventional in our approach to delivering innovative solutions that create value"
          />
          <ValuesCard
            icon="/icons/file-contract.svg"
            title="Accountability"
            description="We take responsibility for our words, actions and results."
          />
          <ValuesCard
            icon="/icons/headset.svg"
            title="Customer Focus"
            description="We are customer centric. Our focus is building outstanding customer experience and lasting relationships."
          />
          <ValuesCard
            icon="/icons/handshake-simple.svg"
            title="Integrity"
            description="We are honest, transparent and keep to our commitments."
          />
          <ValuesCard
            icon="/icons/trophy-star.svg"
            title="Excellence"
            description="We are intentional in consistently producing high-quality results, thereby exceeding the expectations of our stakeholders."
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14">
          <h2 className="bold-40 text-orange-base">
            Our Subsidiaries
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <SubsidaryCard
            title="Tangerine General"
            subTitle="our businesses"
            description="Tangerine General provides protection for individuals and businesses over speciﬁed assets in the event of damage or loss. Tangerine General is licensed by the National Insurance Commission (NAICOM) and has over 5,000 Corporate Clients."
            link="/"
            titleStyle="text-orange-base"
            subTitleStyle="text-orange-900"
            linkStyle="bg-orange-base hover:bg-orange-base/75"
            bgStyle="bg-orange-50"
          />
          <SubsidaryCard
            title="Tangerine Life"
            subTitle="our businesses"
            description="Tangerine Life is a financial services provider that strives to improve the financial security of its consumers. Since its inception, Tangerine Life has Insured 800,000 lives, protected 700 corporate clients, and ranked the top 5 Life Insurance Businesses in Nigeria."
            link="/"
            titleStyle="text-green-base"
            subTitleStyle="text-green-900"
            linkStyle="bg-green-base hover:bg-green-base/75"
            bgStyle="bg-green-50"
          />
          <SubsidaryCard
            title="Tangerine Health"
            subTitle="our businesses"
            description="With an industry track record of 26 years, Tangerine Health provides a diversified range of health and well-being services focusing on preventive and curative support for individuals and corporates through its partnership with 1500+ providers across all 36 states of Nigeria.

            It is the health and well-being partner to 400 multinationals, large local corporates and SMEs."
            link="/"
            titleStyle="text-blue-950"
            subTitleStyle="text-blue-950"
            linkStyle="bg-blue-950 hover:bg-blue-950/75"
            bgStyle="bg-blue-50"
          />
          <SubsidaryCard
            title="Tangerine APT Pension"
            subTitle="our businesses"
            description="Tangerine APT Pensions Limited is a leading Pension Fund Administrator and Asset Management Company. APT Pension provides pensioners with excellent returns on their retirement benefits and generates the best returns for the stakeholders.
            The company has a presence in over 29 states across Nigeria and as a Pension Fund Administrator, "
            link="/"
            titleStyle="text-red-base"
            subTitleStyle="text-red-900"
            linkStyle="bg-red-base hover:bg-red-base/75"
            bgStyle="bg-red-50"
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-6">
          <h2 className="bold-40 text-orange-base">
            Leadership Team
          </h2>
          <p className="regular-18">Meet the Minds Steering Our Organization</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-orange-50 w-full p-12 flex flex-col gap-6 rounded-3xl">
            <h2 className="bold-40 text-orange-base">
              Group Executives
            </h2>
            <Link href="/leadership-team">
              <Button variant="secondary" size="lg" className="gap-2">
                Learn more
                <Image src="/icons/arrow-top-right.svg" alt="learn more" width={12} height={12} />
              </Button>
            </Link>
          </div>
          <div className="bg-blue-50 w-full p-12 flex flex-col gap-6 rounded-3xl">
            <h2 className="bold-40 text-blue-base">
              Board of Directors
            </h2>
            <Link href="/leadership-team#directors">
              <Button variant="secondary" size="lg" className="gap-2">
                Learn more
                <Image src="/icons/arrow-top-right.svg" alt="learn more" width={12} height={12} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4 w-full max-w-md">
          <p className="regular-14 uppercase text-generic-500">Putting People First: Explore Our Section 172 Statement</p>
          <h2 className="bold-40 text-orange-base">
            Section 172 Statement
          </h2>
          <p className="regular-18 text-generic-800">Discover how we put people first with our Section 172 statement. See how our decisions consider everyone, from employees to the environment. We're not just about profits we're about building a sustainable future for all.</p>
          <Link href="/pages/section-172-statement">
            <Button variant="secondary" size="lg">Learn more</Button>
          </Link>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-base rounded-3xl" style={{
          backgroundImage: "url('/images/tang-building.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2">
            <h3 className="bold-32 md:bold-48 text-white">Explore more about us</h3>
            <p className="regular-18 text-white text-center">
              Download our Corporate Profile for a comprehensive overview.
            </p>
            <Link href="/TangerineCorporateProfile.pdf" target="_blank" className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-orange-base text-base font-normal font-gilroy-semibold">Dowload</p>
              <CloudDownloadIcon className="text-orange-base" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewPage;
