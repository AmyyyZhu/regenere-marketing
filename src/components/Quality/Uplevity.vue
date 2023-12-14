<template>
  <div class="flex max-w-[930px] relative">
    <div
      class="absolute cursor-pointer right-[32px] top-[29px]"
      v-if="width > 768"
      @click="closeReadMore"
    >
      <img src="../../assets/Quality/Ingrediant/CloseButton.svg" />
    </div>
    <div class="md:w-[18%] w-0 flex justify-end">
      <div class="mt-[200px] w-[102px]">
        <NaviBar :navi="navi" @naviTo="naviTo" />
      </div>
    </div>
    <div
      class="md:w-[82%] w-full flex flex-col overflow-scroll"
      id="synakewholeBox"
    >
      <Title :title="title" class="mb-6" @backTo="backTo" />
      <div class="md:px-[44px] px-[27px] w-full flex justify-center">
        <div class="flex flex-col w-full">
          <!-- Main CONTENT
              Point 1 -->
          <div class="flex" id="synakepoint1">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-center"
            >
              <div
                class="min-w-[204px] md:h-full md:border-r flex items-center md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  Uplevity™ e-Lift
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-1 font-normal">
                  The next dimension in facial definition
                </div>
                <p class="text-[12px] text-[#7d7d7d]">
                  <span class="text-[#d4b115]">Uplevity™ e-Lift </span>
                  mimics effects of microcurrent devices, ‘triorbital’ skin lift
                  and minimized appearance of wrinkles in just 1 week
                </p>
              </div>
            </div>
          </div>

          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mt-3 md:mb-4"></div>
          <div
            class="text-[#d4b115] md:text-[18px] text-[12px] md:mt-0 mt-5 md:mb-7 mb-4"
          >
            High-performing and sustainable tetrapeptide inspired by
            microcurrent devices that mimics the benefits of electrical
            stimulation on the skin for a complete upper face lifted appearance
            and a reduced visibility of wrinkles.
          </div>
          <div
            class="uppercase font-normal text-[#a4a4a4] md:text-[20px] text-[14px] md:mb-3 mb-2"
          >
            INCI
          </div>
          <div class="md:text-[18px] text-[12px] md:mb-[100px] mb-12">
            Glycerin, Water (Aqua), Acetyl Tetrapeptide-5.
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 2 -->
          <div class="flex md:mb-[21px] mb-[44px]" id="synakepoint2">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-center"
            >
              <div
                class="min-w-[204px] md:h-full md:border-r flex items-start md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  In Vitro Efficacy
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-2 font-normal leading-[16px]">
                  Mimicking the collagen contraction capacity of microcurrents
                  in vitro, for firmer skin. Improved mitochondrial function for
                  a better muscle tone.
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-[14px] font-medium text-[#e3c84c] mb-4 uppercase"
            v-if="width > 768"
          >
            how does uplevity™ e-lift peptide work?
          </div>
          <div class="flex md:mb-5 mb-9 justify-center">
            <img src="../../assets/Quality/Ingrediant/Uplevity/Pic1.png" />
          </div>

          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 3 -->
          <div class="flex mb-[45px]" id="synakepoint3">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-center"
            >
              <div
                class="min-w-[204px] md:h-full md:border-r flex items-start md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  In Vivo Efficacy
                </p>
              </div>
              <div class="flex mr-[26px] md:text-[40px] text-[30px] shrink-0">
                13.1%
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] leading-[16px] mb-2 font-normal">
                  Wrinkle length reduction on the crow’s feet after only 1 week
                </div>
              </div>
            </div>
          </div>

          <div class="mb-[45px]">
            <p class="md:text-[16px] text-[14px] font-medium">
              ACHIEVING A MICROCURRENT-LIKE UPPER FACE LIFT APPEARANCE<br /><br />
            </p>
            <p
              class="md:text-[14px] text-[12px] md:leading-[17px] leading-[14px]"
            >
              36 female and male volunteers applied a cream with 2% UplevityTM
              e-Lift peptide solution and a placebo cream on half face, twice
              day for 28 days. A second group of 1 0 volunteers used a
              commercial microcurrent device, once a day, 5 days a week, and
              applied a placebo cream, twice a day for 28 days.<br /><br />
              'Triorbital' skin lift, comparable to the efficacy of a commercial
              microcurrent device<br />
              1. Supraorbital eyebrow and eyelid lift .<br />
              2. Orbital crow's feet lift.<br />
              3. Infraorbital upper cheek lift.
            </p>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[25px] mb-[45px]">
            <div class="flex">
              <div class="h-full mr-[18px] flex items-start">
                <div
                  class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
                >
                  01
                </div>
              </div>
              <div class="flex flex-col">
                <p class="md:text-[16px] text-[12px] font-medium">
                  Upper face skin lift<br /><br />
                </p>
                <p
                  class="md:text-[14px] text-[12px] md:leading-[17px] leading-[14px]"
                >
                  The lifting effect was determined on the eyebrows, eyelids,
                  crow's feet and upper cheek through distance measurement, and
                  through visualization by a 3D imaging system that displays
                  arrows that represent the movement of the skin after the
                  treatment.
                </p>
              </div>
            </div>
          </div>

          <div class="flex mb-[45px]" v-if="width > 768">
            <div class="w-[50%] mr-[30px] flex flex-col relative">
              <div class="w-full text-center text-[12px] h-[40px]">0 days</div>
              <div class="flex justify-center">
                <img src="../../assets/Quality/Ingrediant/Uplevity/Pic3.png" />
              </div>
              <div class="w-full text-center text-[12px] mt-[180px] absolute">
                20 days
              </div>
            </div>
            <div class="w-full flex flex-col items-center">
              <div class="flex w-full justify-center h-[40px]">
                <div class="w-1/2 flex justify-center">
                  <p class="w-2/3 text-center text-[12px]">
                    2% <span class="text-[#e3c84c]">Uplevity™</span> e-Lift
                    peptide solution
                  </p>
                </div>
                <div class="w-1/2 flex justify-center">
                  <p class="w-2/3 text-center text-[12px]">Placebo</p>
                </div>
              </div>
              <div class="w-full">
                <img
                  src="../../assets/Quality/Ingrediant/Uplevity/Pic2.png"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <div class="mb-[45px]" v-else>
            <div class="w-full flex flex-col items-center">
              <div class="flex w-full justify-center h-[40px]">
                <div class="w-1/2 flex justify-center">
                  <p class="w-2/3 text-center text-[12px]">
                    2% <span class="text-[#e3c84c]">Uplevity™</span> e-Lift
                    peptide solution
                  </p>
                </div>
                <div class="w-1/2 flex justify-center">
                  <p class="w-2/3 text-center text-[12px]">Placebo</p>
                </div>
              </div>
              <div class="w-full">
                <img
                  src="../../assets/Quality/Ingrediant/Uplevity/Pic2.png"
                  class="w-full"
                />
              </div>
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[25px] mb-[45px]">
            <div class="flex">
              <div class="h-full mr-[18px] flex items-start">
                <div
                  class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
                >
                  02
                </div>
              </div>
              <div class="flex flex-col">
                <p class="md:text-[16px] text-[12px] font-medium">
                  Minimized appearance of wrinkles<br /><br />
                </p>
                <p
                  class="md:text-[14px] text-[12px] md:leading-[17px] leading-[14px]"
                >
                  The length of the wrinkles on the crow’s feet and underneath
                  the eye region was measured by means of a 3D microtopography
                  imaging system based on fringe projection(PRIMOS).
                </p>
              </div>
            </div>
          </div>

          <div class="pl-[22px]" v-if="width < 768">
            <img src="../../assets/Quality/Ingrediant/Uplevity/Pic4.png" />
          </div>

          <div
            class="h-[1px] bg-[#a4a4a4] md:mt-3 md:mb-[76px] mb-[45px]"
          ></div>

          <!-- Point 5 -->
          <div class="flex flex-col" id="synakepoint4">
            <p
              class="md:text-[24px] text-[14px] font-medium font-['DM Sans'] md:mb-[18px] mb-[12px]"
            >
              Testing
            </p>
            <p
              class="md:text-[16px] text-[12px] font-bold md:underline md:underline-offset-[12px] md:decoration-[#a4a4a4] font-['DM Sans'] mb-2"
            >
              Mycotxins, environmental toxins Tests
            </p>
            <div class="h-[1px] bg-[#a4a4a4] mb-4" v-if="width < 768"></div>
            <p
              class="md:text-[18px] text-[12px] md:mt-4 font-['DM Sans'] md:mb-[100px] mb-[60px]"
            >
              The results showed no mycotxins, environmental toxins
            </p>
            <p class="text-[10px] mb-[400px]">
              Argireline® is a trademark of Lubrizol Corporation or its
              affiliates
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from "@vueuse/core";
import NaviBar from "./NaviBar.vue";
import Title from "./Title.vue";
import PointTitle from "./PointTitle.vue";
export default {
  data() {
    return {
      navi: [
        {
          title: "Uplevity e-Lift",
          item: ["Description", "INCI"],
        },
        {
          title: "Efficacy",
          item: ["In Vitro Efficacy", "In Vivo Efficacy"],
        },
        {
          title: "Testing",
          item: ["Testing"],
        },
      ],
      naviMap: {
        Description: "synakepoint1",
        INCI: "synakepoint1",
        "In Vitro Efficacy": "synakepoint2",
        "In Vivo Efficacy": "synakepoint3",
        Testing: "synakepoint4",
      },
      title: "Uplevity™ e-Lift",
      pointTitle1: {
        title: "Syn®-ake",
        picture: "up",
        content: "",
        description: [
          "A tetrapeptide with a demonstrated efficacy against puffy eyebags",
          "Eyeseryl®",
          "reduced eyebag volume after only 14 days, decreased appe-arance of dark circles and improved under-eye region in men and women.",
        ],
      },
    };
  },
  components: {
    NaviBar,
    Title,
    PointTitle,
  },
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
  methods: {
    closeReadMore() {
      this.$emit("closeReadMore");
    },
    naviTo(item) {
      const outele = document.getElementById("synakewholeBox");
      const inele = document.getElementById(this.naviMap[item]);
      let scorllH = inele.offsetTop - outele.offsetTop;
      outele.scrollTo({ top: scorllH, behavior: "smooth" });
    },
    backTo() {
      this.$emit("backTo");
    },
  },
};
</script>

<style></style>
