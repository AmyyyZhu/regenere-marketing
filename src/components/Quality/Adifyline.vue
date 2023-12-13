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
      <div class="mt-[200px] w-[103px]">
        <NaviBar :navi="navi" @naviTo="naviTo" />
      </div>
    </div>
    <div
      class="md:w-[82%] w-full flex flex-col overflow-scroll"
      id="snap8wholeBox"
    >
      <Title :title="title" class="mb-6" @backTo="backTo" />
      <div class="md:px-[44px] px-[27px] w-full flex justify-center">
        <div class="flex flex-col w-full">
          <!-- Point 1 -->
          <div class="flex" id="snap8point1">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-center"
            >
              <div
                class="min-w-[204px] md:h-full md:border-r flex items-center md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  Adifyline®
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] font-normal">
                  Perfect curves against gravity
                </div>
                <p class="text-[12px] text-[#7d7d7d]">
                  <span class="text-[#d4b115]">Adifyline® </span>
                  peptide stimulates adipogenesis, increases cheek volume
                  and provides a curvy silhouette.
                </p>
              </div>
            </div>
          </div>

          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mt-3 md:mb-4"></div>
          <div class="text-[#d4b115] md:text-[18px] text-[12px] md:mb-7 mb-4">
            Hexapeptide that increases fatty tissue volume
            in specific areas improving facial appearance
            and providing attractive body curves. adifyline®
            peptide stimulates peroxisome proliferator-
            activated receptor gamma coactivator la (PGC-1α)
            expression, enhancing adipogenesis rate. This
            leads to a higher lipid accumulation and volume
            growth in the desired areas like breast and cheeks.
          </div>
          <div
            class="uppercase font-normal text-[#a4a4a4] md:text-[20px] text-[14px] md:mb-3 mb-2"
          >
            INCI
          </div>
          <div class="md:text-[18px] text-[12px] md:mb-[50px] mb-12">
            Butylene Glycol, Water(Aqua), Acetyl Hexapeptide-38.
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 2 -->
          <div class="flex md:mb-[21px] mb-[44px] md:mt-[24px]" id="snap8point2">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-start"
            >
              <div
                class="min-w-[204px] md:h-full md:border-r flex items-center md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="self-start font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  In Vitro Efficacy
                </p>
              </div>
              <div class="flex mr-[26px] md:mt-[30px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] mb-2">
                  <span class="text-[#d4b115]">adifyline®</span>
                  peptide promoted PGC-1α expression by more than 61%
                </p>
                <div
                  class="md:text-[14px] text-[12px] text-[#7d7d7d] font-normal"
                >
                  Lipid accumulation is higher in cells treated with adifyline® peptide.
                </div>
              </div>
            </div>
          </div>

          <div class="flex md:mb-[60px] mb-[33px] md:pr-[40px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                01
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                EFFECT ON PGC-1a EXPRESSION<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                Human preadipocytes were incubated in a growth medium and differentiated with preadipocyte
                differentiation medium (PDM-2) in presence of <span class="text-[#d4b115]">adifyline®</span> peptide.
                After 10 days, cells were lysed, RNA was extracted and reverse transcription was carried out. 
                The resulting cDNA was analyzed by quantitative RT-PCR.
              </p>
            </div>
          </div>
          <div class="flex justify-center md:pb-[24px] mb-[48px]">
            <img src="../../assets/Quality/adifyline/adifyline_chart1.png" />
          </div>
          <div class="flex md:mb-[60px] mb-[36px] md:pr-[40px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                02
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                EFFECT ON LIPID ACCUMULATION<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px] md:pr-[30px]">
                <span class="text-[#d4b115]">adifyline®</span> peptide was added to human preadipocytes during 
                their differentiation with PDM-2. After 10 days, levels of intra-cellular lipid droplets were 
                measured by fluorescence.
              </p>
            </div>
          </div>
          <div class="flex justify-center md:pb-[24px] mb-[48px]">
            <img src="../../assets/Quality/adifyline/adifyline_chart2.png" />
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 3 -->
          <div class="flex md:mb-[21px] mb-[44px] md:mt-[12px]" id="snap8point3">
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
              <div class="flex self-start mr-[26px] md:mt-[12px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] mb-2">
                  Cheek volume increased by 12% after 14 days with <br />
                  <span class="text-[#d4b115]">adifyline®</span> peptide and breast volume improved by <br />
                  30-fold compared to placebo after 56 days.
                </p>
              </div>
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[26px] mb-8">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                01
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                FACIAL VOLUME INCREASE<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                A group of 22 female volunteers (aged between 50 and 60) applied a cream containing 2%
                <span class="text-[#d4b115]">adifyline®</span> peptide solution on the cheeks twice a day for 14 days.
                The cheek volume was analyzed by Fringe Projection at the end of the study. This technique
                allows the direct acquisition of the morphology of the studied area in 3D, being able to obtain
                the volume in mmᶟ.
              </p>
            </div>
          </div>
          <div class="flex justify-center md:pb-[24px] mb-[48px]">
            <img src="../../assets/Quality/adifyline/adifyline_chart3.png" />
          </div>
          <div class="flex md:flex-row flex-col md:mb-[26px] mb-8">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                02
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                FACIAL VOLUME INCREASE<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                <span class="text-[#d4b115]">adifyline®</span> peptide was tested on a group of 22 women aged 25 to 40 with a bra cup size 
                between 80 and 90. A cream containing 2% <span class="text-[#d4b115]">adifyline®</span>
                peptide solution was applied on a breast and the placebo on the other, twice a day for 56 days.
                Measurements of breast volume were taken at day 14, 28 and 56 using the FOITS technique.
              </p>
            </div>
          </div>
          <div class="flex justify-center md:pb-[24px] mb-[48px]">
            <img src="../../assets/Quality/adifyline/adifyline_chart4.png" />
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[36px] mb-12"></div>

          <!-- Point 7 -->
          <div class="flex flex-col md:min-w-[315px]" id="snap8point7">
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
          title: "Adifyline",
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
        Description: "snap8point1",
        INCI: "snap8point1",
        "In Vitro Efficacy": "snap8point2",
        "Ex Vivo Efficacy": "snap8point3",
        Testing: "snap8point7",
      },
      title: "Adifyline®",
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
      const outele = document.getElementById("snap8wholeBox");
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
