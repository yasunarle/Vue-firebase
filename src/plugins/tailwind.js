import Vue from "vue";
import VueTailwind from "vue-tailwind";

const TInput = {
  classes: "border-2 block w-full rounded text-gray-800",
  // Optional variants
  variants: {
    // ...
  },
  // Optional fixedClasses
  // fixedClasses: '',
};

const TButton = {
  classes: "rounded-lg border block inline-flex items-center justify-center",
  variants: {
    secondary:
      "rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600",
  },
};
const TToggle = {
  fixedClasses: {
    wrapper:
      "relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200",
    wrapperChecked:
      "relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200",
    button:
      "inline-block absolute transform translate-x-0 transition ease-in-out duration-200",
    buttonChecked:
      "inline-block absolute transform translate-x-full transition ease-in-out duration-200",
    checkedPlaceholder: "inline-block",
    uncheckedPlaceholder: "inline-block",
  },
  classes: {
    wrapper:
      "bg-gray-200 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent",
    wrapperChecked:
      "bg-blue-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent",
    button:
      "h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-gray-400 text-xs",
    buttonChecked:
      "h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-blue-500 text-xs",
    checkedPlaceholder:
      "rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs",
    uncheckedPlaceholder:
      "rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs",
  },
  variants: {
    danger: {
      wrapperChecked:
        "bg-red-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent",
    },
    success: {
      wrapperChecked:
        "bg-green-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent",
    },
    box: {
      wrapper:
        "bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent",
      wrapperChecked:
        "bg-blue-500 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent",
      button:
        "h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-gray-400 text-xs",
      buttonChecked:
        "h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-blue-500 text-xs",
      checkedPlaceholder:
        "rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs",
      uncheckedPlaceholder:
        "rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs",
    },
  },
};

const settings = {
  TInput,
  TButton,
  TToggle,
};

Vue.use(VueTailwind, settings);
