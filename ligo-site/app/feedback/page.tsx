import SectionHeading from "@/components/SectionHeading";
import FeedbackForm from "@/components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div className="px-6 pb-28 pt-40 lg:px-10 lg:pt-52">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Talk to us"
          title="We want your feedback, not your support tickets."
          description="We're early. The fastest way to shape Ligo is to tell us exactly what's broken about organizing sports today."
        />

        <div className="mt-14">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
