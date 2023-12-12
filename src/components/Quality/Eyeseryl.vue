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
                  Eyeseryl®
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Decrease.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] font-normal">
                  {{ pointTitle1.description[0] }}
                </div>
                <p class="text-[12px] text-[#7d7d7d]">
                  <span class="text-[#d4b115]"
                    >{{ pointTitle1.description[1] }}
                  </span>
                  {{ pointTitle1.description[2] }}
                </p>
              </div>
            </div>
          </div>

          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mt-3 md:mb-4"></div>
          <div class="text-[#d4b115] md:text-[18px] text-[12px] md:mb-7 mb-4">
            Tetrapeptide that helps improve the appearance of the eye contour by
            mainly reducing the presence of under-eye puffiness and dark
            circles. eyeseryl® peptide minimizes tissue deterioration, fluid
            buildup and excess fat under the eyes, which represent the main
            triggering factors for eyebags.
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
              <div class="flex mr-[26px] md:text-[40px] text-[30px] shrink-0">
                18.5%
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-2 font-normal leading-[16px]">
                  reduction of bilirubin levels for a minimized appearance of
                  dark circles
                </div>
                <p class="text-[12px] text-[#7d7d7d] leading-[14px]">
                  Lower accumulation of lipids, suggesting a decrease in
                  fat-related eyebags.
                </p>
              </div>
            </div>
          </div>
          <div class="flex md:mb-[25px] mb-[45px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                01
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[16px] text-[12px] font-medium">
                VASCULAR PERMEABILITY INHIBITION<br /><br />
              </p>
              <p
                class="md:text-[14px] text-[12px] md:leading-[16px] leading-[13px]"
              >
                A monolayer of human endothelial cells was treated with scalar
                concentrations of the peptide. Permeation levels were evaluated
                after the treatments by measuring fluorescein
                isothiocyanate-dextran permeation through the monolayer.
                Decreased vascular permeability, helping prevent fluid
                accumulation.
              </p>
            </div>
          </div>
          <div class="flex md:mb-[25px] mb-[45px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                02
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[16px] text-[12px] font-medium">
                BILIRUBIN DEGRADATION<br /><br />
              </p>
              <p
                class="md:text-[14px] text-[12px] md:leading-[16px] leading-[13px]"
              >
                A solution of 0.01% conjugated bilirubin was with 10 mg/mL
                <span class="text-[#e3c84c]">eyeseryl®</span> peptide in a light
                protected test tube, for 24 hours. The concentration of
                bilirubin was evaluated by HPLC.
              </p>
            </div>
          </div>
          <div class="flex md:mb-[25px] mb-[45px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                03
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[16px] text-[12px] font-medium">
                REDUCED LIPID ACCUMULATION<br /><br />
              </p>
              <p
                class="md:text-[14px] text-[12px] md:leading-[16px] leading-[13px]"
              >
                Primary human preadipocytes were incubated with adipocyte
                differentiation medium and were treated with different
                concentrations of
                <span class="text-[#e3c84c]">eyeseryl®</span> peptide. Lipid
                accumulation was quantified in cells by fluorescence using a
                reagent that stains intracellular lipid droplets.
              </p>
            </div>
          </div>

          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 3 -->
          <div class="flex md:mb-[21px] mb-[44px]" id="synakepoint3">
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
                29.4%
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] leading-[16px] mb-2 font-normal">
                  improvement in skin elasticity after only one month
                </div>
                <p class="text-[12px] leading-[14px] text-[#7d7d7d]">
                  Improved skin luminance and reduced darkness under the eyes
                  after 14 days.
                </p>
              </div>
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[25px] mb-[45px]">
            <div class="flex md:w-[70%] md:mb-0 mb-[45px]">
              <div class="h-full mr-[18px] flex items-start">
                <div
                  class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
                >
                  01
                </div>
              </div>
              <div class="flex flex-col">
                <p class="md:text-[16px] text-[12px] font-medium">
                  EYE CONTOUR IMPROVEMENT<br /><br />
                </p>
                <p
                  class="md:text-[14px] text-[12px] md:leading-[17px] leading-[14px]"
                >
                  20 women (18-65 years old) applied a cream containing 10%
                  <span class="text-[#e3c84c]">eyeseryl®</span>
                  peptide solution around the eyes, twice a day for 60 days.
                  Skin elasticity was measured after 30 and 60 days of the
                  treatment by means of a cutometer.
                </p>
              </div>
            </div>
            <div class="flex justify-center md:pl-0 pl-[36px]">
              <img src="../../assets/Quality/Ingrediant/Eyeseryl/Pic1.svg" />
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[25px] mb-[45px]">
            <div class="flex md:w-[70%] md:mb-0 mb-[45px]">
              <div class="h-full mr-[18px] flex items-start">
                <div
                  class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
                >
                  02
                </div>
              </div>
              <div class="flex flex-col">
                <p class="md:text-[16px] text-[12px] font-medium">
                  ANTI-DARK CIRCLE EFFECT<br /><br />
                </p>
                <p
                  class="md:text-[14px] text-[12px] md:leading-[17px] leading-[14px]"
                >
                  17 women (34-54 years old) with dark circles applied a cream*
                  with 1%
                  <span class="text-[#e3c84c]">eyeseryl®</span>
                  peptide solution under the eyes, twice a day. The dark
                  pigmentation under the eyes was assessed after 14 and 28 days
                  through chromametry studies. The parameters evaluated were L*
                  (luminance) and ITAº (individual typological angle).
                </p>
              </div>
            </div>
            <div class="flex justify-center md:pl-0 pl-[36px]">
              <img src="../../assets/Quality/Ingrediant/Eyeseryl/Pic2.svg" />
            </div>
          </div>

          <div class="flex flex-col md:mb-[25px] mb-[45px]">
            <div class="flex md:mb-[25px] mb-[45px]">
              <div class="h-full mr-[18px] flex items-start">
                <div
                  class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
                >
                  02
                </div>
              </div>
              <div class="flex flex-col">
                <p class="md:text-[16px] text-[12px] font-medium">
                  ANTI-DARK CIRCLE EFFECT<br /><br />
                </p>
                <p
                  class="md:text-[14px] text-[12px] md:leading-[17px] leading-[14px]"
                >
                  17 women (34-54 years old) with dark circles applied a cream*
                  with 1%
                  <span class="text-[#e3c84c]">eyeseryl®</span>
                  peptide solution under the eyes, twice a day. The dark
                  pigmentation under the eyes was assessed after 14 and 28 days
                  through chromametry studies. The parameters evaluated were L*
                  (luminance) and ITAº (individual typological angle).
                </p>
              </div>
            </div>
            <div class="flex justify-center pl-[36px]">
              <img src="../../assets/Quality/Ingrediant/Eyeseryl/Pic3.png" />
            </div>
          </div>

          <div
            class="h-[1px] bg-[#a4a4a4] md:mt-3 md:mb-[76px] mb-[45px]"
          ></div>

          <!-- Point 5 -->
          <div class="flex flex-col md:w-[315px]" id="synakepoint4">
            <p
              class="md:text-[24px] text-[14px] font-medium font-['DM Sans'] md:mb-[18px] mb-[12px]"
            >
              Testing
            </p>
            <p
              class="md:text-[16px] text-[12px] font-bold font-['DM Sans'] mb-2"
            >
              Mycotxins, environmental toxins Tests
            </p>
            <div class="h-[1px] bg-[#a4a4a4] mb-4"></div>
            <p
              class="md:text-[18px] text-[12px] font-['DM Sans'] md:mb-[100px] mb-[60px]"
            >
              Mycotxins, environmental toxins Tests
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
          title: "Eyeseryl",
          item: ["Description", "INCI"],
        },
        {
          title: "Efficacy",
          item: ["In Vitro Efficacy", "In Vivo Efficacy"],
        },
        {
          title: "Safety",
          item: ["In Vitro Safety", "In Vivo Safety"],
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
      title: "Eyeseryl®",
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
