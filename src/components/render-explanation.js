// Function to clean and organize the explanation text

const cleanExplanationContent = (content) => {
    return content
      .replace(/(\*\*Explanation:\*\*|\*\*Additional context:\*\*|\*)/g, "")  
      .replace(/(\r\n|\r|\n)+/g, '\n')                                       
      .replace(/([^\n])\n([^\n])/g, '$1 $2')                                  
      .trim();
};
  

const renderExplanationContent = (content) => {
    const explanationSections = cleanExplanationContent(content).split("\n");
  
    return explanationSections.map((section, index) => (
      <div key={index} className="mb-4">
        <p className="text-gray-600">{section}</p>
      </div>
    ));
};

export default renderExplanationContent;
  
