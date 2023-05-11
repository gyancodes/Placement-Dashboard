import React from "react";

const Stats = () => {
    return (
        <div className="bg-stone-700  max-w-full">
            <div className="flex flex-col justify-center items-center text-center font-sans">
                <h1 className="text-2xl text-white font-bold py-8">
                    Result of Almost Two Decades of Hardwork, Commitment and Empathy
                </h1>

                <div className="grid grid-cols-2 py-10 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-6 sm:grid sm:grid-cols-2 ">
                    <div className=" gap-4 py-7 text-center">
                        <span className="text-4xl text-yellow-400 font-extrabold">
                            20,000+
                        </span>
                        <div className="text-lg text-white font-bold mt-2">Students</div>
                    </div>
                    <div className=" gap-4 py-7 text-center">
                        <span className="text-4xl text-yellow-400 font-extrabold">80+</span>
                        <div className="text-lg text-white font-bold mt-2">Courses</div>
                    </div>
                    <div className=" gap-4 py-7 text-center">
                        <span className="text-4xl text-yellow-400 font-extrabold">850</span>
                        <div className="text-lg text-white font-bold mt-2">Events</div>
                    </div>
                    <div className=" gap-4 py-7 text-center">
                        <span className="text-4xl text-yellow-400 font-extrabold">
                            100+
                        </span>
                        <div className="text-lg text-white font-bold mt-2">
                            High Profile Visitors
                        </div>
                    </div>
                    <div className=" gap-4 py-7 text-center">
                        <span className="text-4xl text-yellow-400 font-extrabold">
                            12,000+
                        </span>
                        <div className="text-lg text-white font-bold mt-2">
                            Skill Course Students
                        </div>
                    </div>
                    <div className=" py-7 text-center">
                        <span className="text-4xl text-yellow-400 font-extrabold">
                            6,000+
                        </span>
                        <div className="text-lg text-white font-bold mt-2">Placements</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
