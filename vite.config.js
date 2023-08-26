import inject from "@rollup/plugin-inject";

export default {
  plugins: [inject({ jQuery: "jquery" })],
};
