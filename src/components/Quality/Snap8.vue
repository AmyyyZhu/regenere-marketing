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
      <Title :title="title" class="mb-6" />
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
                  {{ pointTitle1.title }}
                </p>
              </div>
              <div class="flex mr-[26px] shrink-0">
                <img src="../../assets/Quality/Ingrediant/Increase.svg" />
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
            Syn®-ake attenuates neuronal signal transduction likely by binding
            to mnAChR. It is a snake venom-mimicking peptide with a BOTOX-like
            effect, excellent smoothing and anti-wrinkle properties,
            effectiveness against mimic wrinkles, thorough safety testing, ease
            of formulation, and the recipient of the Swiss Technology Award in
            2006.
          </div>
          <div
            class="uppercase font-normal text-[#a4a4a4] md:text-[20px] text-[14px] md:mb-3 mb-2"
          >
            INCO
          </div>
          <div class="md:text-[18px] text-[12px] md:mb-[100px] mb-12">
            Diaminobutyroyl Benzylamide Diacetate
          </div>
          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

          <!-- Point 2 -->
          <div class="flex md:mb-[21px] mb-[44px]" id="snap8point2">
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
                <img src="../../assets/Quality/Ingrediant/Decrease.svg" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] mb-2 font-normal">
                  Contraction of the innervated muscle cells
                </div>
                <p class="text-[12px]">
                  <span class="text-[#d4b115]">{{ title }} </span>
                  peptide reduces muscle cell contraction. Its action is
                  fast-acting, long-lasting and fully reversible.
                </p>
              </div>
            </div>
          </div>
          <div class="md:text-[16px] text-[14px] mb-4">
            Frequency of contraction as a function of post-incubation time
            (Peptide concentration: 0.5 mM)
          </div>
          <div class="w-full justify-center md:mb-0 mb-12">
            <img src="../../assets//Quality/Ingrediant/Synake/Pic1.svg" />
          </div>
          <div class="md:h-[1px] h-0 bg-[#a4a4a4] md:mb-[18px] mb-12"></div>

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

          <div class="flex md:mb-[25px] mb-[45px] md:pr-[40px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                01
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                Wrinkles on Forehead<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                Both the smoothing effect, measured on 80% of the volunteers,
                and the anti-wrinkle effect, measured on 73% of the volunteers,
                were evaluated after 28 days on the forehead and resulted in a
                reduction of up to 21%. The impact of
                <span class="md:text-[16px] text-[12px] text-[#e3c84c]"
                  >Syn®-ake</span
                >
                (4%) on smoothing (Ra) and anti-wrinkle (Rz and Rt) was compared
                to that of a competitive product (10%) and a placebo.
              </p>
            </div>
          </div>
          <div class="md:pl-[38.6px] md:pr-[40px] md:mb-5 mb-8">
            <img
              src="../../assets/Quality/Ingrediant/Synake/Pic2.svg"
              class="w-full"
            />
          </div>
          <div class="md:pl-[38.6px] md:pr-[40px] md:mb-5 mb-8">
            <img
              src="../../assets/Quality/Ingrediant/Synake/Pic3.svg"
              class="w-full"
            />
          </div>
          <div class="flex md:mb-[25px] mb-[45px] md:pr-[40px]">
            <div class="h-full mr-[18px] flex items-start">
              <div
                class="font-['DM Sans'] text-[18px] text-[#d4b115] font-bold"
              >
                02
              </div>
            </div>
            <div class="flex flex-col">
              <p class="md:text-[14px] text-[12px] font-medium">
                Wrinkles on Crow’s<br /><br />
              </p>
              <p class="md:text-[14px] text-[12px]">
                Feet Effect of
                <span
                  class="md:text-[16px] uppercase text-[12px] text-[#e3c84c]"
                  >Syn®-ake</span
                >
                (4%) on smoothing (Ra) and anti-wrinkle (Rz and Rt) measured on
                the crow's feet after 28 days, compared with a competitive
                product (10%) and placebo.
                <span
                  class="md:text-[16px] uppercase text-[12px] text-[#e3c84c]"
                  >Syn®-ake</span
                >
                reduces all wrinkle aspects of crow’s feet.
              </p>
            </div>
          </div>
          <div class="md:pl-[38.6px] md:pr-[40px] md:mb-5 mb-8">
            <img
              src="../../assets/Quality/Ingrediant/Synake/Pic4.svg"
              class="w-full"
            />
          </div>
          <div class="md:pl-[38.6px] md:pr-[40px] md:mb-5 mb-8">
            <img
              src="../../assets/Quality/Ingrediant/Synake/Pic5.svg"
              class="w-full"
            />
          </div>
          <div
            class="h-[1px] bg-[#a4a4a4] md:mt-3 md:mb-[76px] mb-[45px]"
          ></div>

          <!-- Point 5 -->
          <div class="flex flex-col md:w-[315px]" id="snap8point4">
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
      pointTitle1: {
        title: "Syn®-ake",
        picture: "up",
        content: "",
        description: [
          "Stop wrinkling -Keep laughing",
          "Syn®-ake",
          "Help your face to relax without loosing the ability to express yourself.",
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
      const outele = document.getElementById("snap8wholeBox");
      const inele = document.getElementById(this.naviMap[item]);
      let scorllH = inele.offsetTop - outele.offsetTop;
      outele.scrollTo({ top: scorllH, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
