import { GetStaticProps } from "next";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Link from "next/link";
import { urlFor } from "../sanity";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
            <Header socials={socials} />

            {/* Hero Banner Section */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            {/* About Section */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>

            {/* Experience Section */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>

            {/* Skills Section */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            {/* Projects Section */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            {/* Contact Me Section */}
            <section id="contact" className="snap-start">
                <ContactMe pageInfo={pageInfo} />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <ArrowUpCircleIcon className="text-[#F7AB0A] h-10 w-10 rounded-full cursor-pointer hover:grayscale-0" />
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    try{
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials
        },
        revalidate: 10
    };
    }
    catch (error) {
        console.error("Error fetching data:", error);
        // Provide fallback data or return notFound
        return {
            notFound: true
            // OR return empty data:
            // props: { pageInfo: {}, experiences: [], skills: [], projects: [], socials: [] }
        };
    }
};
