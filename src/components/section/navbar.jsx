"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { useEffect, useState } from "react";
const BLUR_FADE_DELAY = 0.04;
export const Navbar = () => {
  useEffect(() => {
    fetch("/api/log", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    (async () => {
      // The original code only fetches and logs the Response object, not the actual data.
      // You need to call .json() on the response to get the data.
      const response = await fetch("/api/visitorcount");
      const data = await response.json();

      if (data.success) {
        const { totalVisits, uniqueVisitors } = data;
        console.log(totalVisits, uniqueVisitors);
        setTotalVisits(totalVisits);
        setuniqueVisitor(uniqueVisitors);
      }
    })();
    //
  }, []);
  const [totalVisits, setTotalVisits] = useState();
  const [uniqueVisitor, setuniqueVisitor] = useState();

  return (
    <section id="footer">
      <BlurFade delay={BLUR_FADE_DELAY * 12} className="order-1 md:order-2">
        <hr className="h-px my-8 bg-border border-0" />
        <div className="w-full grid sm:grid-cols-2 text-muted-foreground/70 text-sm grid-cols-1 max-w-3xl mx-auto ">
          <span className=" flex items-center  justify-center  ">
            {/* <p className="text-linear-to-b from-red-100 to-blue-500 "></p> */}
            © 2026 Nishank Gangwar. All rights reserved.
          </span>
          <span className=" flex items-center justify-center  ">
            You are the{" "}
            <span className="mx-1 text-muted-foreground text-[15px]">
              {uniqueVisitor}
              <sup>th</sup>
            </span>
            visitor in the total of{" "}
            <span className="mx-1 text-muted-foreground text-[15px]">
              {totalVisits}
            </span>
            visits
          </span>{" "}
        </div>
      </BlurFade>
    </section>
  );
};
