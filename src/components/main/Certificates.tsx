import Subsections from "../Subsections"

type Certificates = {
    name: string,
    id: string
}

const certs: Certificates[] = [
  {
    name: "AWS Certified Solutions Architect Associate",
    id: "fdfb2960-496f-4890-931b-d00ac18a8431",
  },
  {
    name: "AWS Certified Developer Associate",
    id: "acf39c25-bb8d-4e3d-abbb-8293313fd91e",
  },
  {
    name: "HashiCorp Terraform Associate (004)",
    id: "82904905-4f18-4084-aa5c-7053d3847766",
  },
];


function Certificates() {
  return (
    <Subsections id="certs" title="Certificates">
      <div className="w-full h-full flex md:flex-row gap-2 flex-col md:justify-evenly justify-center items-center mb-12">
        {certs.map((cert) => (
          <div className="bg-neutral-900 h-60">
            <iframe
              key={cert.id}
              title={cert.name}
              src={`https://www.credly.com/embedded_badge/${cert.id}`}
              width="250"
              height="270"
              style={{ border: "none" }}
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </Subsections>
  );
}

export default Certificates