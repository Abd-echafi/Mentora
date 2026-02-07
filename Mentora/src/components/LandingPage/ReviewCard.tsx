import type { Review } from "@/types/review";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <>
      <div
        style={{ "--card-bg": review.color } as React.CSSProperties}
        className="bg-linear-to-b from-white/54 from-10%  via-(--card-bg)/10 via-90%  to-white/54 to-100%  rounded-xl px-6 w-fit lg:flex flex-col justify-between hidden"
      >
        <div>
          <div className="flex flex-row gap-1 justify-end -mt-2">
            <img src="/,.svg" alt="" />
            <img src="/,.svg" alt="" />
          </div>
          <div className="max-w-40">
            <h3 className="mb-2 text-gray-300">{review.module} Student</h3>
            <p>“{review.comment}.”</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-row">
            {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
              <img key={i} src="/star-sharp.svg" alt="" className="w-5" />
            ))}
            {Array.from({ length: Math.floor(5 - review.rating) }).map(
              (_, i) => (
                <img key={i} src="/star-gray.svg" alt="" className="w-5" />
              ),
            )}
          </div>
          <div className="flex flex-row mt-3 gap-5 items-center">
            <img
              src={review.img}
              alt={`${review.name}'s avatar`}
              className="w-12"
            />
            <div>
              <p>
                <span className="font-bold">{review.name}</span>
                <br />
                <span className="text-gray-400 text-sm mt-1">Student</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-13 bg-linear-to-r from-white/54 from-5% via-black/20 via-60% to-white/54 to-100% px-10 py-3 mt-10 lg:hidden">
        <div className="flex flex-row gap-1 justify-end -mt-6">
          <img src="/,.svg" alt="" className="w-4" />
          <img src="/,.svg" alt="" className="w-4" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <img
              src={review.img}
              alt={`${review.name}'s avatar`}
              className="w-12"
            />
            <div>
              <p className="leading-[1.1]">
                <span className="font-bold">{review.name}</span>
                <br />
                <span className="text-gray-400 text-sm mt">Student</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
              <img key={i} src="/star-sharp.svg" alt="" className="w-5" />
            ))}
            {Array.from({ length: Math.floor(5 - review.rating) }).map(
              (_, i) => (
                <img key={i} src="/star-gray.svg" alt="" className="w-5" />
              ),
            )}
          </div>
        </div>
        <p className="px-10 py-5 ml-5">"{review.comment}"</p>
      </div>
    </>
  );
}
