import { aboutBlocks } from "@/data/about";
import { FadeIn } from "@/components/shared/fade-in";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { SectionHeading } from "@/components/shared/section-heading";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="The property"
            title="About Ponderosa"
            description="A coastal retreat where thoughtful design meets the raw beauty of North Devon."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="space-y-20">
          {aboutBlocks.map((block, index) => {
            const reversed = index % 2 === 1;

            return (
              <FadeIn key={block.id} delay={index * 0.05}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <PlaceholderImage
                      src={block.image}
                      alt={block.imageAlt}
                      label={block.image ? block.title : `Photo coming soon · ${block.title}`}
                      className="aspect-[4/3] w-full rounded-2xl"
                    />
                  </div>
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <h3 className="font-serif text-2xl font-light text-navy dark:text-warm-white">
                      {block.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {block.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
