import { formatDate } from "../../utils/formatDate"

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Muhibur Rahman
                </span>
            </h3>
            <p className="text__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In error cum asperiores doloribus pariatur omnis delectus earum tenetur qui? Suscipit aspernatur alias repellat. Mollitia, natus at unde veniam nemo quo quae inventore excepturi expedita praesentium iste beatae illum minima voluptatem labore, maiores perferendis soluta odio. Voluptatem, at? Architecto expedita laudantium ad vitae, culpa harum laboriosam itaque quaerat officiis quibusdam aut atque impedit temporibus cum aperiam eligendi fuga ipsum tenetur ipsa?
            </p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        {formatDate("7-02-2011")} - {formatDate("12-04-2017")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PhD in Surgery
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Prime Hospital, Port Harcourt
                        </p>
                    </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formatDate("9-04-2019")} - {formatDate("12-04-2023")}
                        </span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">
                            PhD in Surgery
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Prime Hospital, Port Harcourt
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ed]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formatDate("07-04-2010")} -{formatDate("08-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                        </p>

                        <p className="text-[14px] leading-6 font-medium text-textColor">
                            Prime Hospital, Port Harcourt.
                        </p>
                        {/* <li className="p-4 rounded bg-[#fff9ea]">

                        </li> */}
                </li>
                <li className="p-4 rounded bg-[#fff9ed]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formatDate("07-04-2010")} -{formatDate("08-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                        </p>

                        <p className="text-[14px] leading-6 font-medium text-textColor">
                            Prime Hospital, Port Harcourt.
                        </p>
                        <li className="p-4 rounded bg-[#fff9ea]">
                            
                        </li>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout