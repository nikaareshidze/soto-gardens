export default function Footer() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img
        src="https://cdn.shopify.com/s/files/1/0552/9331/3078/files/josefin-QKmqOlWSor0-unsplash_3000x3000.jpg?v=1648303208"
        width="100%"
        height="507px"
        style={{ objectFit: "cover" }}
        alt="footer"
      />
      <div
        style={{
          position: "absolute",
          top: "40px",
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "white", width: "60%" }}>
          Providing the outside space your home <br />
          deserves.
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "white",
            width: "30%",
            lineHeight: "24px",
          }}
        >
          For those who want their outside space to be as stylish as their home
          interior, we provide a curated selection of plants and accessories at
          Garden Centre prices. They are professionally designed by an RHS
          medal-winning garden designer and delivered to your front door.
        </p>
      </div>
    </div>
  );
}
