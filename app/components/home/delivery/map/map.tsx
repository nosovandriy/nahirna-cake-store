const GoogleLocation = () => {
  return (
    <div className="tablet:h-[500px] h-[400px] w-auto laptop:flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10351.454732828843!2d25.6263099!3d49.5625952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d13b7e2d6875e9b%3A0x53a2f501a4880361!2z0KfRltC30JrQtdC50LrQuCDQotC10YDQvdC-0L_RltC70Yw!5e0!3m2!1suk!2sua!4v1694946998231!5m2!1suk!2sua"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleLocation;
