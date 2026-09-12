import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  ShoppingCart,
} from "lucide-react";

const SERVICES = [
  {
    title: "AI Automations",
    description:
      "Streamline repetitive workflows and improve productivity with practical AI-powered automations.",
    Icon: Bot,
  },
  {
    title: "Full Stack Web Development",
    description:
      "Build scalable web platforms with reliable frontends, robust APIs, and maintainable backend systems.",
    Icon: Code2,
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Create secure, conversion-focused online stores with product, order, inventory, and payment workflows.",
    Icon: ShoppingCart,
  },
  {
    title: "Management Systems",
    description:
      "Develop custom systems that organize operations, centralize data, and simplify day-to-day management.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "CRMs",
    description:
      "Manage leads, customer relationships, sales pipelines, and follow-ups through tailored CRM solutions.",
    Icon: Database,
  },
  {
    title: "Web Design",
    description:
      "Design clean, intuitive, and responsive interfaces that communicate your brand and engage users.",
    Icon: Palette,
  },
  {
    title: "Web Apps",
    description:
      "Turn ideas into fast, accessible, and user-friendly web applications for real-world use cases.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Software Development",
    description:
      "Deliver dependable software products with thoughtful architecture, clear code, and room to grow.",
    Icon: LayoutDashboard,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%]"
    >
      <p className="text-center text-gray-600">What I Can Do</p>

      <h1 className="text-5xl font-bold text-center mt-2 mb-12">
        Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Icon size={34} className="text-gray-800" strokeWidth={2} />
            </div>

            <h2 className="text-xl font-semibold">{title}</h2>

            <p className="text-gray-600 mt-3 leading-7">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
