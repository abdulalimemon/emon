"use client";

import Container from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";
import emon from "@/assets/emon.png";
import { MdEmail } from "react-icons/md";
import { TMessage } from "@/type";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMessage>();

  const onSubmit: SubmitHandler<TMessage> = async (data: FieldValues) => {
    try {
      const volunteerInfo = {
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
      };

      //   const res = await addVolunteer(volunteerInfo).unwrap();

      toast(
        "Thank you for joining our volunteer community! Your contribution is greatly appreciated."
      );
      reset();
    } catch (error) {
      toast("Please, try again.");
    }
  };
  return (
    <section className="py-10 md:py-14 bg-slate-100 dark:bg-black">
      <Container className="py-5">
        <div className="p-3 py-5 rounded-lg bg-gray-50 dark:bg-slate-900 md:p-8 flex gap-5 md:gap-14 lg:flex-row flex-col-reverse">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-8/12">
            <h2 className="text-2xl lg:text-4xl py-5 font-semibold">
              Ready to discuss your website requirements?
            </h2>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 font-semibold text-sm">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Full name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Name must be 3 characters or longer.",
                    },
                  })}
                />

                <div className="pt-2">
                  {errors.name?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-semibold">
                Email address
              </label>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required.",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide a valid email address.",
                  },
                })}
              />

              <div className="pt-2">
                {errors.email?.type === "required" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-semibold"
                >
                  Company
                </label>
              </div>
              <div className="mt-2">
                <Input
                  type="text"
                  placeholder="Company"
                  id="company"
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Company is Required.",
                    },
                    minLength: {
                      value: 3,
                      message: "Company must be 3 characters or longer.",
                    },
                  })}
                />
              </div>
              <div className="pt-2">
                {errors.company?.type === "required" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.company.message}
                  </span>
                )}
                {errors.company?.type === "minLength" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.company.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="w-full my-4">
                <label className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <Textarea
                  placeholder="Message"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is Required.",
                    },
                    minLength: {
                      value: 50,
                      message: "Message must be 50 characters or longer.",
                    },
                  })}
                />

                <div className="pt-2">
                  {errors.message?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.message.message}
                    </span>
                  )}
                  {errors.message?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 w-full"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
                  Send message
                </span>
              </button>
            </div>
          </form>

          <div className="bg-black lg:w-4/12 rounded-md px-5 py-10">
            <div className="flex flex-col justify-between h-full">
              <div>
                <FaQuoteLeft className="size-5 lg:size-7 text-color-yellow" />
                <h2 className="my-5 text-text text-sm lg:text-base">
                  If you have any questions or suggestions regarding any
                  projects, please don&apos;t hesitate to contact me. To contact
                  me, fill out the contact form or you can reach out to me via
                  email. I will do my best to respond to your inquiry as soon as
                  possible.
                </h2>
                <p className="text-text text-sm lg:text-base flex items-center">
                  <MdEmail className="size-5 text-color-yellow" />{" "}
                  <span className="ml-3">abdulalimemon02@gmail.com</span>
                </p>
              </div>

              <div>
                <Image
                  src={emon}
                  width={100}
                  height={100}
                  alt="Abdul Alim Emon"
                  className="mt-10 mb-5 rounded-full h-16 w-16"
                />
                <h3 className="text-xl lg:text-base font-semibold text-text">
                  Abdul Alim Emon
                </h3>
                <p className="text-text text-sm lg:text-base">
                  Front End Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
