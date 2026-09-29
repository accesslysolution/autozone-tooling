import SpecTable from "./SpecTable";
import { site } from "@/lib/site";

export default function ProductsIntro() {
  return (
    <section className="py-16">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className="prose-body">
          <p>
            Press brake tools are the punches and dies fitted to a press brake to bend sheet metal into
            accurate angles and shapes. The punch presses the sheet into the die, and the geometry of
            both decides the angle, the inside radius and the quality of every bend.
          </p>
          <p>
            We manufacture a complete range of press brake tools in Pune, hardened and ground for
            precision and long service life. We supply tools for all major press brake brands and
            develop custom tooling for special profiles.
          </p>
          <a href={site.catalogue} className="btn-outline mt-2" download>Download catalogue (PDF)</a>
        </div>
        <SpecTable
          caption="General tooling specifications"
          head={["Parameter", "Details"]}
          rows={[
            ["Material", "42CrMo4 / C45 / CrMo alloy steel"],
            ["Processing", "Hardened and precision ground"],
            ["Finish", "Black oxide / Electroless nickel plating (ENP)"],
            ["Machine compatibility", `${site.machines.join(", ")} and others`],
            ["Packaging", "Wooden box"],
            ["Origin", "100% made in India"],
          ]}
        />
      </div>
    </section>
  );
}