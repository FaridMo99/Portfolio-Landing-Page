import CardButton from './CardButton';

function SkillButtonsContainer({ skills, height }: { skills: string[], height:string}) {
  return (
    <div className={`w-full py-4 flex flex-wrap overflow-scroll h-${height} content-start`}>
      {skills?.map((skill) => <CardButton key={skill} text={skill} />)}
    </div>
  );
}

export default SkillButtonsContainer