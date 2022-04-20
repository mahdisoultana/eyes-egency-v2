import React, { useRef } from "react";
function Lottie({ src }) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      src={src || "https://assets2.lottiefiles.com/packages/lf20_tutvdkg0.json"}
      background="transparent"
      speed="1"
      className="w-full h-full"
      loop
      autoplay
      ref={ref}
    ></lottie-player>
  );
}
// https://assets2.lottiefiles.com/packages/lf20_tutvdkg0.json
// ts7.lottiefiles.com/packages/lf20_cacfi55s.json
export default Lottie;
