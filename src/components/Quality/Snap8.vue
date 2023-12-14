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
                  SNAP-8™
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Decrease.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-1 font-normal">
                  Premium topical alternative to botulinum toxin
                </div>
                <p class="text-[12px] text-[#7d7d7d]">
                  <span class="text-[#d4b115]">SNAP-8™ </span>
                  targets persistent expression wrinkles Up to 72% reduction in
                  maximum depth of wrinkle
                </p>
              </div>
            </div>
          </div>

          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mt-3 md:mb-4"></div>
          <div
            class="text-[#d4b115] md:text-[18px] md:mt-0 mt-5 text-[12px] md:mb-7 mb-4"
          >
            An octapeptide that is an elongation of Argireline® peptide,
            therefore it reduces expression wrinkles topically with an
            alternative mechanism to botulinum toxin.
          </div>
          <div
            class="uppercase font-normal text-[#a4a4a4] md:text-[20px] text-[14px] md:mb-3 mb-2"
          >
            INCI
          </div>
          <div class="md:text-[18px] text-[12px] md:mb-[100px] mb-12">
            Water (Aqua), Acetyl Octapeptide-3, Caprylyl Glycol.
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 2 -->
          <div class="flex md:mb-[44px] mb-[44px]" id="snap8point2">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-start"
            >
              <div
                class="min-w-[204px] md:h-full flex items-start md:border-[#a4a4a4] md:mr-[20px]"
              >
                <p
                  class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  In Vitro Efficacy
                </p>
              </div>
              <div class="flex mr-[26px] md:text-[40px] text-[30px] shrink-0">
                -38%
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-2 font-normal">
                  Wrinkle depth was up to 38% lower
                </div>
                <p class="text-[12px]">
                  Average roughness and wrinkle depth decreased by 11.9% and
                  7.1% respectively.Maximum depth of the biggest wrinkle
                  decreased by up to72.2%
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-between mb-12" v-if="width > 768">
            <div class="flex w-[158px] flex-col self-end">
              <div class="font-['DM Sans'] text-[14px] text-[#e3c84c] mb-2">
                Release of the Neurotransmitter Glutamate
              </div>
              <div class="font-['DM Sans'] text-[14px]">Up to 43% decrease</div>
            </div>
            <div class="shrink-0">
              <img src="../../assets/Quality/Ingrediant/Snap8/Pic1.svg" />
            </div>
            <div class="flex w-[158px] flex-col">
              <div class="font-['DM Sans'] text-[14px] text-[#e3c84c] mb-2">
                Inhibition of snare complex formation
              </div>
              <div class="font-['DM Sans'] text-[14px]">65% reduction</div>
            </div>
          </div>
          <div v-else class="flex flex-col mb-12 w-full items-center">
            <div class="flex w-full justify-end mb-3">
              <div class="flex w-[158px] flex-col">
                <div class="font-['DM Sans'] text-[14px] text-[#e3c84c] mb-2">
                  Inhibition of snare complex formation
                </div>
                <div class="font-['DM Sans'] text-[14px]">65% reduction</div>
              </div>
            </div>
            <div class="shrink-0 justify-self-center mb-3">
              <img src="../../assets/Quality/Ingrediant/Snap8/Pic1.svg" />
            </div>
            <div class="flex w-full">
              <div class="flex w-[158px] flex-col">
                <div class="font-['DM Sans'] text-[14px] text-[#e3c84c] mb-2">
                  Release of the Neurotransmitter Glutamate
                </div>
                <div class="font-['DM Sans'] text-[14px]">
                  Up to 43% decrease
                </div>
              </div>
            </div>
          </div>

          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 3 -->
          <div class="flex md:mb-[21px] mb-[44px]" id="snap8point3">
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
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Decrease.svg" />
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] mb-2">
                  <span class="text-[#d4b115]">{{ title }} </span>
                  peptide reduces muscle cell contraction. Its action is
                  fast-acting, long-lasting and fully reversible.
                </p>
                <div
                  class="md:text-[14px] text-[12px] text-[#7d7d7d] font-normal"
                >
                  Applying for 1 month can delay the appearance of mimic
                  wrinkles up to 5 years.
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
                ROUGHNESS AND WRINKLE DEPTH REDUCTION<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                Women applied a cream with 3%
                <span class="md:text-[16px] text-[12px] text-[#e3c84c]"
                  >Snap-8™</span
                >
                peptide solution C on half of their face and a placebo cream on
                the other half twice a day for 28 days. Wrinkle average depth
                and average roughness (Ra) were measured by fringe projection.
              </p>
            </div>
          </div>
          <div
            class="md:pl-[38.6px] flex justify-center md:pr-[40px] md:[60px] mb-[45px]"
          >
            <img
              src="../../assets/Quality/Ingrediant/Snap8/Pic2.svg"
              class=""
            />
          </div>
          <div class="flex md:mb-[60px] mb-[33px] md:pr-[40px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                02
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                RELAXED SKIN, LESS PROFOUND WRINKLES<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                25 women applied a cream with 10%
                <span
                  class="md:text-[16px] uppercase text-[12px] text-[#e3c84c]"
                  >Snap-8™</span
                >
                peptide solution C on half of their face and a placebo cream on
                the other half twice a day for 14 days. Expression wrinkles were
                evaluated by fringe projection.
              </p>
            </div>
          </div>
          <div
            class="md:pl-[38.6px] flex justify-center md:pr-[40px] md:mb-[60px] mb-[48px]"
          >
            <img
              src="../../assets/Quality/Ingrediant/Snap8/Pic3.svg"
              class=""
            />
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
          title: "SNAP-8™",
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
        "In Vivo Efficacy": "snap8point3",
        Testing: "snap8point4",
      },
      title: "SNAP-8™",
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
