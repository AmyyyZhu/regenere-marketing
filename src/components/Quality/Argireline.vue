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
                  Argireline®
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-1 font-normal">
                  The first peptide for expression wrinkles
                </div>
                <p class="text-[12px] text-[#7d7d7d]">
                  <span class="text-[#d4b115]">Argireline® </span>
                  is a safer topical alternative to Botulinum Toxin, it
                  effective in only 15 days, pharmaceutical quality.
                </p>
              </div>
            </div>
          </div>

          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mt-3 md:mb-4"></div>
          <div class="text-[#d4b115] md:text-[18px] md:mt-0 mt-5 text-[12px] md:mb-7 mb-4">
            The first hexapeptide that is a mimic of the N-terminal end of
            SNAP-25 which competes with this protein for a position in the SNARE
            complex. argireline® is an alternative to Botulinum Toxin, topically
            targeting the same wrinkle-formation mechanism in a very different
            way.
          </div>
          <div
            class="uppercase font-normal text-[#a4a4a4] md:text-[20px] text-[14px] md:mb-3 mb-2"
          >
            INCI
          </div>
          <div class="md:text-[18px] text-[12px] md:mb-[100px] mb-12">
            Water (Aqua), Acetyl Hexapeptide-8.
          </div>
          <div class="h-[1px] bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 2 -->
          <div class="flex md:mb-[21px] mb-[44px]" id="snap8point2">
            <div
              class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-start"
            >
              <div
                class="w-1/2 md:h-full flex border-r items-start md:border-[#a4a4a4] md:mr-[10px]"
              >
                <p
                  class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
                >
                  In Vitro Efficacy
                </p>
              </div>
              <div class="flex w-1/2 flex-col">
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

          <div class="font-medium md:text-[16px] text-[12px]">
            MUSCLE CONTRACTION<br /><br />
          </div>
          <div class="md:text-[14px] text-[12px] mb-[24px]">
            The neurotransmitter involved in muscle contraction is acetylcholine
            and it is released from a vesicle into the synapse. The SNARE
            protein complex is formed by three proteins: VAMP, Syntaxin and
            SNAP-25 and it is essential for neurotransmitter release at the
            synapsis and mediates the final steps of exocytosis. This complex is
            like a cellular hook that captures vesicles and brings them close to
            the membrane to enable their fusion.
          </div>
          <div class="font-medium md:text-[16px] text-[12px]">
            BOTULINUM TOXIN<br /><br />
          </div>
          <div class="md:text-[14px] text-[12px] mb-[24px]">
            A Botulinum Toxin A paralyses the muscle by selectively blocking
            acetylcholine release at the neuromuscular junction. BoNT-A cleaves
            the protein SNAP-25 irreversibly, and therefore the SNARE complex
            cannot assemble. The nerve signal cannot be relayed, the muscle
            cannot contract and it is paralysed.
          </div>
          <div class="font-medium md:text-[16px] text-[12px]">
            ARGIRELINE®<br /><br />
          </div>
          <p class="md:text-[14px] text-[12px] m-0">
            <span class="text-[#e3c84c]">argireline®</span> is a mimic of the
            N-terminal end of SNAP-25 and it competes with the natural protein
            for a position in the SNARE complex, so it destabilizes its
            formation, without breaking any of its components. If the SNARE
            complex is slightly destabilized, the vesicle cannot release
            neurotransmitters. As a consequence, muscle contraction is
            attenuated and the muscle is relaxed.
          </p>

          <div class="flex justify-center mt-[24px] md:mb-[24px] mb-[48px]">
            <img src="../../assets/Quality/Ingrediant/Argi/Pic1.svg" />
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
              <div class="flex mr-[26px] md:text-[40px] text-[30px] shrink-0">
                17%
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] mb-2">
                  Reduction in the depth of wrinkles up to 17% after 15 days
                  with 10%
                  <span class="text-[#d4b115]">argireline® </span>
                  Solution. The depth of the furrow decreased a maximum value of
                  32% in 28 days.
                </p>
              </div>
            </div>
          </div>
          <div
            class="font-['DM Sans'] md:text-[24px] text-[12px] font-medium mb-[20px]"
          >
            DETERMINATION OF EFFICACY AGAINST SKIN WRINKLING
          </div>
          <div class="flex md:flex-row flex-col md:mb-[20px] mb-[30px]">
            <div class="flex md:w-[55%] w-full md:mr-[14px] md:mb-0 mb-[20px]">
              <p
                class="md:text-[16px] text-[12px] md:leading-[18px] leading-[13px]"
              >
                <span class="text-[#e3c84c]">argireline®</span> Solution 10%<br /><br />
                This study was carried out in 10 healthy women volunteers. An
                O/W emulsion containing 10% argireline® Solution was applied
                twice daily around the eyes for 30 days.<br />
                Silicon imprints were obtained pre-test and after 15 and 30
                days. Analyses of the imprints were performed by confocal laser
                scanning microscopy.
              </p>
            </div>
            <div class="flex item-center justify-center">
              <img src="../../assets/Quality/Ingrediant/Argi/Pic3.svg" />
            </div>
          </div>
          <div class="flex md:flex-row flex-col md:mb-[36px] mb-[48px]">
            <div class="flex md:w-[55%] w-full md:mr-[14px] md:mb-0 mb-[20px]">
              <p
                class="md:text-[16px] text-[12px] md:leading-[18px] leading-[13px]"
              >
                <span class="text-[#e3c84c]">argireline®</span> Solution 5%<br /><br />
                A cream containing 5%
                <span class="text-[#e3c84c]">argireline®</span> Solution was
                applied twice daily around the eyes of 14 volunteers, aged 39 to
                64, for 28 days. <br />
                Silicon imprints Of treated areas were measured by confocal
                profilometry.
              </p>
            </div>
            <div class="flex item-center justify-center">
              <img src="../../assets/Quality/Ingrediant/Argi/Pic4.svg" />
            </div>
          </div>

          <div class="h-[1px] bg-[#a4a4a4] md:mb-[36px] mb-12"></div>
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
          title: "Argireline",
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
      title: "Argireline®",
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
