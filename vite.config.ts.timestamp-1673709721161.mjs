// vite.config.ts
import { defineConfig } from "file:///D:/arjaym-dev-personal/plsp-e-com-ui/node_modules/vite/dist/node/index.js";
import react from "file:///D:/arjaym-dev-personal/plsp-e-com-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteTsConfigPaths from "file:///D:/arjaym-dev-personal/plsp-e-com-ui/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), viteTsConfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @import "./src/scss/_variables.scss";
                @import "./src/scss/_mixins.scss";
                `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxhcmpheW0tZGV2LXBlcnNvbmFsXFxcXHBsc3AtZS1jb20tdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGFyamF5bS1kZXYtcGVyc29uYWxcXFxccGxzcC1lLWNvbS11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYXJqYXltLWRldi1wZXJzb25hbC9wbHNwLWUtY29tLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB2aXRlVHNDb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgdml0ZVRzQ29uZmlnUGF0aHMoKV0sXG4gICAgY3NzOiB7XG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAgICAgICAvLyBleGFtcGxlIDogYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvZGVzaWduL3N0eWxlcy92YXJpYWJsZXNcIjtgXG4gICAgICAgICAgICAgICAgLy8gZG9udCBuZWVkIGluY2x1ZGUgZmlsZSBleHRlbmQgLnNjc3NcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxuICAgICAgICAgICAgICAgIEBpbXBvcnQgXCIuL3NyYy9zY3NzL192YXJpYWJsZXMuc2Nzc1wiO1xuICAgICAgICAgICAgICAgIEBpbXBvcnQgXCIuL3NyYy9zY3NzL19taXhpbnMuc2Nzc1wiO1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1MsU0FBUyxvQkFBb0I7QUFDalUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sdUJBQXVCO0FBRzlCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxFQUN0QyxLQUFLO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsUUFHRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlwQjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
