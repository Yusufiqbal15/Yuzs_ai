
const CoverLetter = async ({ params }) => {

    const id  = await params.id;

  return  <div> CoverLetter here: {id} </div>;
};

export default CoverLetter;
