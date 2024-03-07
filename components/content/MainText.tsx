function MainText() {
  return (
    <div className="font-segoe font-bold md:text-[48px] text-[24px] md:leading-[57.6px] leading-[32px] main-text">
      Unleash the power of AI within<br />
      <span style={{
        background: "var(--Gradient-Primary, linear-gradient(90deg, #C7B3F8 12.83%, #7C55E9 58.63%, #402989 100%))",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>TensorPro.</span> A Blockchain-Powered<br />
      AI Infrastructure<br />
    </div>
  )
}

export default MainText;