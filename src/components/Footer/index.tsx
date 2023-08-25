function HeaderComponent() {
  return (
    <div>
      <footer className="flex justify-between bg-black w-full text-white p-8 text-[24px] font-light mt-[128px] tracking-wide">
        <div className="w-1/3">Ideas that change things</div>

        <div className="w-1/3">
          <div>
            <p>Europe</p>
            <div className="mt-[8px]">
              <p>Göteborg, Sweden</p>
              <p>Stockholm, Sweden</p>
              <p>Copenhagen, Denmark</p>
            </div>
          </div>

          <div className="mt-[48px]">
            <p>North America</p>
            <div className="mt-[8px]">
              <p>New York, United States</p>
              <p>Toronto, Canada</p>
              <p>Montreal, Canada</p>
            </div>
          </div>

          <div className="mt-[48px]">
            <p>Asia</p>
            <div className="mt-[8px]">
              <p>Singapora, Singapore</p>
              <p>Shangai, China</p>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <div>
            <p>Social</p>
            <div className="mt-[8px]">
              <p>Linkedin</p>
              <p>Instagram</p>
            </div>
          </div>

          <div className="mt-[48px]">
            <p>The fine print</p>
            <div className="mt-[8px]">
              <p>Privacy, Policy</p>
            </div>
          </div>

          <div className="mt-[48px]">
            <p>We are a part of...</p>
            <div className="mt-[8px]">
              <p>Stagwell Global</p>
            </div>
          </div>

          <div className="mt-[48px]">
            <p>© 2023 Forsman & Bodenfors. </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HeaderComponent
