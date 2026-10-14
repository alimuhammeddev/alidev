import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="bg-[#252a25] py-8 text-[#e6e2d8]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row lg:px-8">
        <Brand inverted />

        <p className="text-sm text-[#b9b8ac]">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <p className="text-sm text-[#b9b8ac]">
          <span className="text-[#d58b69]">&lt;/&gt;</span> Building with
          creativity and code
        </p>
      </div>
    </footer>
  );
}
