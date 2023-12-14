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
                  Decorinyl®
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] font-normal">
                  Significant effect on the regulation of fibrillogenesis
                </div>
                <p class="text-[12px] text-[#7d7d7d]">
                  <span class="text-[#d4b115]">Decorinyl® </span>
                  functional ingredient ensures the regular spacing of 
                  collagen fibrils, maintaining tissue shape.
                </p>
              </div>
            </div>
          </div>

          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mt-3 md:mb-4"></div>
          <div class="text-[#d4b115] md:text-[18px] text-[12px] md:mb-7 mb-4">
            Mimic tetrapeptide of the sequences of decorin that specifically bind to 
            collagen fibrils, improving skin suppleness and providing higher resiliency. 
            decorinyl® functional ingredient comprises a liposomal system for enhanced 
            penetration and increased efficacy.
          </div>
          <div
            class="uppercase font-normal text-[#a4a4a4] md:text-[20px] text-[14px] md:mb-3 mb-2"
          >
            INCI
          </div>
          <div class="md:text-[18px] text-[12px] md:mb-[50px] mb-12">
            Water (Aqua), Lecithin, Tripeptide-10 Citrulline, Carbomer, Triethanolamine,<br /> 
            Caprylyl Glycol, Phenoxyethanol. <br />
            Paraben free.
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
                  Improvement in the quality of collagen fibers
                </p>
                <div
                  class="md:text-[14px] text-[12px] text-[#7d7d7d] font-normal"
                >
                  <span class="text-[#d4b115]">{{ title }} </span>
                  functional ingredient guarantees uniformity of fibril 
                  diameter, helping to establish skin mechanical properties.
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
                REGULATION OF COLLAGEN FIBRILLOGENESIS<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                Type I collagen samples were treated with decorinyl® functional ingredient at different <br />
                concentrations. The process of fibrillogenesis was measured by turbidity readings. <br />
                All tested concentrations of decorinyl® functional ingredient present significant activity on <br />
                regulation of fibrillogenesis respect to control, in a dose-dependent manner.
              </p>
            </div>
          </div>
          <div class="flex justify-center md:pb-[24px] mb-[48px]">
            <img src="../../assets/Quality/decorinyl/decorinyl_chart1.png" />
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
                DERMAL COLLAGEN FIBRILS STUDY<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px] md:pr-[30px]">
                Tissues from a tridimensional human skin model were<br />
                treated with 0.01% decorinyl® functional ingredient<br /> 
                (peptide concentration). <br />
                Skin sections were observed by Transmission <br />
                Electron Microscopy (TEM). <br />
                The diameter of collagen fibres was measured and <br />
                statistically analysed using the One way ANOVA<br />
                analysis.
              </p>
            </div>
            <img src="../../assets/Quality/decorinyl/decorinyl_chart2.png" />
          </div>


          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 3 -->
          <div class="flex md:mb-[21px] mb-[44px] md:mt-[24px]" id="snap8point3">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-center"
            >
              <div
                class="min-w-[204px] md:h-full md:border-r flex items-start md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="self-start font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  Ex Vivo Efficacy
                </p>
              </div>
              <div class="flex self-start mr-[26px] md:text-[40px] text-[30px] shrink-0">
                -9%
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] mb-2">
                  decrease of the standard deviation of collagen fibril diameter
                </p>
                <div
                  class="md:text-[14px] text-[12px] text-[#7d7d7d] font-normal"
                >
                  <span class="text-[#d4b115]">{{ title }} </span>
                  functional ingredient guarantees uniformity of fibril 
                  diameter, helping to establish skin mechanical properties.
                </div>
              </div>
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[36px] mb-[48px]">
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                HISTOCHEMICAL STUDY OF HUMAN BIOPSIES<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                Skin biopsies of three volunteers were evaluated before and after a two-month treatment with a 
                cosmetic formulation containing 0.01% decorinyl® functional ingredient (peptide concentration).
                The collagen fibril diameter was measured from Transmission Electron Micrographs.
              </p>
            </div>
          </div>
          <div
            class="md:pl-[38.6px] flex justify-center md:pr-[40px] md:mb-[36px] mb-[12px]"
          >
            <img
              src="../../assets/Quality/decorinyl/decorinyl_img1.png"
              class="md:pr-[100px]"
            />
           <img
              src="../../assets/Quality/decorinyl/decorinyl_img2.png"
              class=""
            />
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[36px] mb-12"></div>


          <!-- Point 4 -->
          <div class="flex md:mb-[21px] mb-[44px] md:mt-[12px]" id="snap8point4">
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
              <div class="flex self-start mr-[26px] md:text-[40px] text-[30px] shrink-0">
                +54%
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] mb-2">
                  Increase in skin suppleness after 28 days
                </p>
                <div
                  class="md:text-[14px] text-[12px] text-[#7d7d7d] font-normal"
                >
                  <span class="text-[#d4b115]">{{ title }} </span>
                  functional ingredient guarantees uniformity of fibril 
                  diameter, helping to establish skin mechanical properties.
                </div>
              </div>
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:mb-[26px] mb-8">
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                SKIN SUPPLENESS<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px] md:pr-[30px]">
                The test was performed on a group of 22 female <br />
                volunteers between the ages of 40 and 58. A cream <br />
                containing 5% decorinyl functional ingredient was applied <br />
                daily on the face for 28 days. Another group of 21 female <br />
                was treated with a placebo cream. Variations of skin <br />
                suppleness were measured at time 0 and after 28 days.
              </p>
            </div>
            <img src="../../assets/Quality/decorinyl/decorinyl_chart3.png" />
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[36px] mb-12"></div>

          <!-- Point 5 -->
          <div class="flex flex-col md:w-[315px]" id="snap8point5">
            <p
              class="md:text-[24px] text-[14px] font-medium font-['DM Sans'] md:mb-[18px] mb-[12px]"
            >
              In Vitro Safety
            </p>
          </div>
          <div class="flex md:flex-row flex-col md:mb-[36px] mb-[48px]">
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px]">
                The toxicological profile of DECORINYL® for cosmetic purposes was assessed in vitro and in vivo. A 
                full toxicological report and a summary of all the safety tests performed are available on request.
              </p>
            </div>
          </div>
          <div>
            <div class="flex md:justify-between md:flex-row flex-col md:w-[677px] w-[320px] md:mb-12">
              <div class="md:w-[300px] w-[320px]">
                <div class="flex md:items-end md:min-h-[48px]">
                  <p class="font-bold text-[16px]">
                    Citotoxicity test on 3T3 fibroblasts
                  </p>
                </div>
                <div class="h-[1px] bg-[#a4a4a4] md:mb-[16px] mb-12"></div>
                <p class="text-[18px]">
                  The results showed no signs of citotoxicity at the concentrations assayed.
                </p>
              </div>
              <div class="md:w-[300px] w-[320px]">
                <div class="flex md:items-end md:min-h-[48px]">
                  <p class="font-bold text-[16px]">
                    Citotoxicity test on human eptidermal keratinocytes
                  </p>
                </div>
                <div class="h-[1px] bg-[#a4a4a4] md:mb-[16px] mb-12"></div>
                <p class="text-[18px]">
                  The results showed no signs of citotoxicity at the concentrations assayed.
                </p>
              </div>
            </div>
            <div class="flex md:justify-between md:flex-row flex-col md:w-[677px] w-[320px] md:mb-12">
              <div class="md:w-[300px] w-[320px]">
                <div class="flex md:items-end">
                  <p class="font-bold text-[16px]">
                    Mutagenicity test (Ames test)
                  </p>
                </div>
                <div class="h-[1px] bg-[#a4a4a4] md:mb-[16px] mb-12"></div>
                <p class="text-[18px]">
                  The results showed no mutagenical activity under the conditions assayed.
                </p>
              </div>
              <div class="md:w-[300px] w-[320px]">
                <div class="flex md:items-end">
                  <p class="font-bold text-[16px]">
                    Ocular Irritation (HET-CAM test)
                  </p>
                </div>
                <div class="h-[1px] bg-[#a4a4a4] md:mb-[16px] mb-12"></div>
                <p class="text-[18px]">
                  The product is potentially not irritating for the eyes.
                </p>
              </div>
            </div>
          </div>

          <div class="h-[1px] bg-[#a4a4a4] md:mb-[36px] mb-12"></div>

          <!-- Point 6 -->
          <div class="flex flex-col md:w-[315px]" id="snap8point6">
            <p
              class="md:text-[24px] text-[14px] font-medium font-['DM Sans'] md:mb-[18px] mb-[12px]"
            >
              In Vivo Safety
            </p>
          </div>
          <div class="flex md:flex-row flex-col md:mb-[36px] mb-[48px]">
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                SKIN SENSITISATION (HYPOALLERGENICITY)<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                An HRIPT (Human Repeated Insult Patch Test) was performed on 100 volunteers aged 25 to 59. 
                Decorinyl® did not cause sensitisation in any volunteer so it can be classified as "harmless” as regards 
                of the possibility of skin irritation.
              </p>
            </div>
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
          title: "Decorinyl",
          item: ["Description", "INCI"],
        },
        {
          title: "Efficacy",
          item: ["In Vitro Efficacy", "Ex Vivo Efficacy", "In Vivo Efficacy"],
        },
        {
          title: "Safety",
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
        "In Vivo Efficacy": "snap8point4",
        // "In Vitro Safety": "snap8point5",
        "In Vivo Safety": "snap8point6",
        Testing: "snap8point7",
      },
      title: "Decorinyl®",
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
