<template>
  <div v-if="width > 768" class="w-full bg-[#fafafa]">
    <div
      class="flex flex-col w-full justify-center items-center md:px-[82px] px-[22px] md:my-16 my-8"
    >
      <IngreInfo :whole-data="wholeData"/>
    </div>
  </div>
  <div v-else class="w-full bg-[#fafafa]">
    <div
      class="flex w-full justify-center my-8"
    >
      <IngreInfoMobile :whole-data="wholeData"/>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from "@vueuse/core";
import IngreInfo from "./IngreInfo.vue";
import IngreInfoMobile from "./IngreInfoMobile.vue";
export default {
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
  components: {
    IngreInfo,
    IngreInfoMobile,
  },
  data() {
    return {
      wholeData: [
        {
          name: "Anti-wrinkle peptides",
          desciption:
            "Botox-like Peptides that enable the face to relax, reducing wrinkles but without losing the ability to help people express themselves. It’s fast acting, long lasting and fully reversible, delaying the appearance of wrinkles, with age-freezing effects. Visible deep wrinkle smoothing after only 4 weeks. Boosts Collagen significantly and also inhibits its degradation.",
          innovation: [
            {
              title: "Inyline®",
              descrip:
                "A new approach to reducing expression lines. It specifically focuses on the post-synaptic pathway, affects AChR clustering in lab tests, and has been shown to soften expression wrinkles.",
              more: "",
            },
            {
              title: "Tripeptide 29®",
              descrip:
                "Known for its ability to significantly boost collagen production, playing a crucial role in skin repair and rejuvenation.",
              more: "",
            },
            {
              title: "Hexapeptide - 11",
              descrip:
                "Proven to effectively enhance skin firmness and elasticity. It stimulates collagen production, reduces the appearance of fine lines and wrinkles, brightens the complexion, combats signs of aging, and increases the skin's capacity to retain water.",
              more: "",
            },
            {
              title: "SNAP 8",
              descrip:
                "Works by easing the tension in facial muscles, leading to fewer contractions and a smoother appearance.",
              more: "SNAP 8",
            },
            {
              title: "Palmytoyl Pentapeptide 4",
              descrip:
                "Renowned for wrinkle prevention and repair, particularly around the eye area. Recommended for mature skin, it provides benefits akin to Retinol without damaging the skin barrier.",
              more: "",
            },
            {
              title: "Argireline®",
              descrip:
                "By blocking specific neurotransmitters, this peptide strengthens the skin's collagen, giving it a tighter, more youthful look.",
              more: "Argireline®",
            },
            {
              title: "Synake",
              descrip:
                "Allows the face to relax, diminishing wrinkles while ensuring natural facial expressions are preserved. Moreover, it has age-defying effects that help delay the appearance of wrinkles.",
              more: "Synake",
            },
          ],
        },
        {
          name: "Under-eye peptides",
          desciption:
            "After just 14 days, these peptides were shown to reduce the volume of undereye bags, diminish dark circles, and smooth the under-eye area for both men and women.",
          innovation: [
            {
              title: "Eyeseryl®",
              descrip:
                "A tetrapeptide with a demonstrated efficacy against puffy eyebags • Reduced eyebag volume after only 14 days • Decreased appearance of dark circles • Improved under-eye region in men and women",
              more: "Eyeseryl®",
            },
            {
              title: "Pentapeptide 18®",
              descrip:
                "Pentapeptide-18 is a peptide that has been studied for its ability to reduce signs of aging, including minimizing the appearance of expression lines and visibly reducing wrinkle depth.",
              more: "",
            },
            {
              title: "Dipeptide 2®",
              descrip:
                "Considered a skin conditioning ingredient whose smaller size allows it to easily penetrate skin’s uppermost layers where it can assist with skin renewal and replenishment.",
              more: "",
            },
          ],
        },
        {
          name: "Anti-sagging peptides",
          desciption:
            "These peptides lift and reshape facial contours while promoting elastin growth. They've been shown to enhance skin tone, firmness, and flexibility in just two months. These peptides also improve nutrient distribution, combat early aging signs, and organize collagen to rejuvenate skin suppleness. In lab tests, they've been shown to support better fibril formation, control fibril dimensions, and help rebuild the skin's deeper layers, boosting its resilience against aging.",
          innovation: [
            {
              title: "Uplevity®",
              descrip:
                "Counteracting the force of gravity • Creator of functional elastin • Aids in restructuring the dermis to look 9 years younger • Lifting effect and reshaping of the face contour",
              more: "Uplevity®",
            },
            {
              title: "Decorinyl®",
              descrip:
                "Collagen organization to restore skin suppleness • Helps improve fibrillogenesis in vitro • Controls fibril dimensions in vitro • Gives suppleness to the skin",
              more: "Decorinyl®",
            },
            {
              title: "Pentapeptide 3®",
              descrip:
                "Palmitoyl Pentapeptide-3 is considered a must use in anti-aging regimen products because it has the best track record of stimulating the development of collagen, elastin, and other components which moisturize and support the dermal matrix. It also has been shown to not cause any adverse side effects, making it as effective as retinol, but less irritating.",
              more: "",
            },
            {
              title: "Adifyline®",
              descrip:
                "• Stimulates adipogenesis in vitro • Increases cheek volume",
              more: "Adifyline®",
            },
            {
              title: "Tripeptide 5®",
              descrip:
                "Visibly reduces fine lines and wrinkles (including deep wrinkles), encourages a firmer look and feel, helps reduce rough texture",
              more: "",
            },
            {
              title: "Syntacks®",
              descrip:
                "Improve lymphatic circulation, and is used to combat dark and puffy under-eye circles.",
              more: "Syntacks®",
            },
            {
              title: "GHK Cu®",
              descrip:
                "Copper is an important trace element that plays a key factor in the production of collagen and elastin, GHK-Cu can be a natural supplement for copper in the connective tissue synthesis",
              more: "GHK Cu®",
            },
          ],
        },
        {
          name: "Anti-inflammatory peptides",
          desciption:
            "These peptides reduce redness, lessen skin erythema, aid in restoring skin's barrier function, strengthen the skin's natural defenses. In lab tests, they been shown to boost β-defensins expression and shield the skin from damaging external factors.",
          innovation: [
            {
              title: "Palmytoyl Tetrapeptide 7®",
              descrip:
                "Works as a skin-restoring ingredient and is noted for its soothing ability since it can interrupt factors within skin that lead to signs of irritation (including from exposure to UVB light) and loss of firmness.",
              more: "",
            },
            {
              title: "Bacillus Extract®",
              descrip:
                "Bacillus extract has soothing and hydrating properties due to its ability to help strengthen skin’s microbiome, enabling this “invisible barrier” to reduce water loss and better maintain surface hydration",
              more: "",
            },
          ],
        },
        {
          name: "Antioxidants",
          desciption:
            "These peptides provide antioxidant protection and promote thorough detoxification. Within just 14 days, they improve skin appearance by neutralizing harmful free radicals. They offer comprehensive protection against damaging ROS and RNS free radicals, as well as RCS reactive molecules.",
          innovation: [
            {
              title: "Beta Glucan®",
              descrip:
                "Beta-glucan offers antioxidant properties and has been shown to help visibly minimize signs of aging/sun damage (including reducing the look of wrinkle depth and rough, uneven tone).",
              more: "",
            },
          ],
        },
        {
          name: "Photo-aging and brightening peptides",
          desciption:
            "These peptides protects skin from sun-related aging and safeguard DNA integrity. In lab tests, they've been shown to rejuvenate cells by over a decade. Essential in reducing UV damage signs.",
          innovation: [
            {
              title: "Reproage®",
              descrip:
                "Reprogramming the skin for a youthful appearance • Epigenetics brought to cosmetics • Recovery of the stemness potential • Improved complexion of both younger and older skin",
              more: "Reproage®",
            },
            {
              title: "Nonapeptide- 1®",
              descrip:
                "Nonapeptide-1 has been shown to inhibit the production of melanin, the pigment that gives our skin its color. Doing so can help brighten the complexion, even out skin tone, and reduce the appearance of dark spots and age spots",
              more: "",
            },
            {
              title: "DAP - Tripeptide 33®",
              descrip:
                "Prevent skin cell damages induced directly or indirectly by UV irradiation.",
              more: "",
            },
            {
              title: "Decapeptide 12®",
              descrip:
                "Decapeptide-12 is an oligopeptide known for its anti-tyrosinase properties. Tyrosinase catalyzes the production of melanin and other pigments. Decapeptide-12 helps to inhibit the production of tyrosinase and fade dark spots, called hyper-pigmentation, caused by sun damage or PIH (post-inflammatory hyper-pigmentation).",
              more: "",
            },
          ],
        },
      ],
    };
  },
};
</script>
