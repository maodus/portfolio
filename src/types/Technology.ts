// Short ID's of technology names
export type TechName =
  | "antlr"
  | "as"
  | "c"
  | "cpp"
  | "cs"
  | "firebase"
  | "java"
  | "llvm"
  | "python"
  | "react"
  | "unity"
  | "ts"

interface TechInfo {
  displayName: string
  iconLink: string
}

const PATH_PREFIX: string = "./tech/"

// Dict that contains displayable info about the technologies
export const techBank: Record<TechName, TechInfo> = {
  antlr: {displayName: "ANTLR4", iconLink: PATH_PREFIX + "antlr.svg"},
  as: {
    displayName: "Android Studio",
    iconLink: PATH_PREFIX + "androidstudio.svg",
  },
  c: {displayName: "C", iconLink: "https://www.svgrepo.com/show/373483/c2.svg"},
  cpp: {
    displayName: "C++",
    iconLink: "https://www.svgrepo.com/show/373528/cpp3.svg",
  },
  cs: {
    displayName: "C#",
    iconLink: PATH_PREFIX + "csharp.svg",
  },
  firebase: {
    displayName: "Firebase",
    iconLink: PATH_PREFIX + "firebase.svg",
  },
  llvm: {
    displayName: "LLVM",
    iconLink: PATH_PREFIX + "llvm.svg",
  },
  python: {
    displayName: "Python",
    iconLink: PATH_PREFIX + "python.svg",
  },
  java: {
    displayName: "Java",
    iconLink: PATH_PREFIX + "java.svg",
  },
  ts: {
    displayName: "TypeScript",
    iconLink: PATH_PREFIX + "typescript.svg",
  },
  unity: {
    displayName: "Unity",
    iconLink: PATH_PREFIX + "unity.svg",
  },
  react: {
    displayName: "React",
    iconLink: PATH_PREFIX + "react.svg",
  },
}
