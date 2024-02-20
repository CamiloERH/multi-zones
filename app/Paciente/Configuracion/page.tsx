import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CiImageOn } from "react-icons/ci";
import { FaPen } from "react-icons/fa";

export default function ProfilePage() {
    return (
        <div className="px-4 xl:px-20 py-10 flex flex-col gap-10">
            <h1 className="font-bold text-3xl">Perfil page en nextjs</h1>
            <div className="border border-[#7C7C7C] rounded-md flex flex-col items-center xl:items-start xl:flex-row gap-5 p-10 bg-white shadow-inner">
                <div>
                    <div className="flex justify-center items-center rounded-full bg-[#C4C4C4] w-[150px] h-[150px] relative">
                        <CiImageOn className="text-white w-12 h-12" />
                        <Button size="icon" className="absolute bottom-1 -right-1 rounded-full">
                            <FaPen />
                        </Button>
                    </div>
                </div>
                <div>
                    <Separator orientation="vertical" />
                </div>
                <div className="w-full">
                    {/* <EditProfileForm /> */}
                </div>
            </div>
            <div className="border border-[#7C7C7C] rounded-md flex flex-wrap gap-5 p-10 bg-white shadow-inner">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="font-bold text-xl">Antecedentes médicos</h2>
                    <p>Para una mejor atención te pedimos completar las siguientes preguntas acerca de tu estado de salud</p>
                </div>
                <div className="w-full">
                    {/* <EditMedicalHistoryForm /> */}
                </div>
            </div>
        </div>
    )
}
