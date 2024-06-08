"use client";
import CountUp from "react-countup";

{
  /* Icons */
}
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaPython,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLua,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

{
  /* components */
}
import Social from "@/components/SocialMedia";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

{
  /* Info JSON */
}
const stats = [
  {
    num: 10,
    text: "Projects done",
  },
  {
    num: 2,
    text: "Projects paid",
  },
  {
    num: 4,
    text: "Years of become developer",
  },
  {
    num: 74,
    text: "Projects created",
  },
];
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Can to build for you website with high performance and UI perfect for you. Known to build API/System Login",
  },
  {
    num: "02",
    title: "Roblox Development UI",
    description:
      "Can to build for you UI / GUI nice or whatever you like. and also you can to ask me to what to let the UI/GUI to do. ",
  },
];
const skills = {
  title: "My skills",
  description:
    "Programming/developer languages ​​that I am using part of my project",
  skillList: [
    {
      name: "tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "css",
      icon: <FaCss3 />,
    },
    {
      name: "html",
      icon: <FaHtml5 />,
    },
    {
      name: "react",
      icon: <FaReact />,
    },
    {
      name: "nextjs",
      icon: <SiNextdotjs />,
    },
    {
      name: "python",
      icon: <FaPython />,
    },
    {
      name: "javascript",
      icon: <FaJs />,
    },
    {
      name: "typescript",
      icon: <SiTypescript />,
    },
    {
      name: "lua",
      icon: <SiLua />,
    },
  ],
};
const info = [
  {
    icon: <FaDiscord />,
    title: "Discord",
    description: "themoon_.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mail@xzendevx.xyz",
  },
];

export default function Home() {
  return (
    <app-root class="m-auto">
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left">
              <span className="text-xl">Website Develeoper</span>
              <h1 className="h1">Hello I'm Shalev</h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel in website quality and design and the most fun is always
                making websites and improving
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-blue-400 rounded-full flex justify-center items-center text-blue-400 text-base hover:bg-blue-400 hover:text-black hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-sung text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="min-h-[50vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold">{service.num}</div>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-400 transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs
            defaultValue="skills"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <div className="w-full">
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 max-xl:text-center sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger>
                                <div className="text-2xl group-hover:text-blue-400 transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="about">about me</TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      <section className="mb-[400px]">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px] min-h-[20vh]">
            <div className="xl:h-[54%] order-2 xl:order-none">
              <div className="flex flex-col gap-6 p-10 bg-[#0f0f0f] rounded-xl">
                <h3 className="text-4xl">Content me!</h3>
                <p className="text-white/60">
                  For content me you can to write here message, or just talk
                  with me on discord whatever you want. and we will talk about
                  what do you want me to do
                  <br />
                  Choose service that you want to hire me for.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="Name" placeholder="Your Name" />
                  <Input type="Email" placeholder="Email" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a serivce" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="wbt">Web Development</SelectItem>
                      <SelectItem value="rdu">Roblox Development UI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px]"
                  placeholder="Write your message here."
                />
                <Button size={"md"} className="max-w-40">
                  Send message
                </Button>
              </div>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#131313] text-white rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </app-root>
  );
}
