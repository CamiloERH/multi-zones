const redirects = async () => [
    {
        source: "/Paciente/PlanSalud",
        destination: `https://qa.masproteccionsalud.cl/Paciente/PlanSalud/`,
        permanent: true,
    },
]


const rewrites = async () => [
    {
        source: "/Paciente/PlanSalud",
        destination: "https://qa.masproteccionsalud.cl",
    },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites,
    assetPrefix: "https://qa.masproteccionsalud.cl",
};

export default nextConfig;
