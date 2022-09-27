export default {
  name: "en",
  title: "English",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "experiences",
      title: "Experiencias",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "experience" },
        },
      ],
    },
    {
      name: "pageInfos",
      title: "Informação da Página",
      type: "reference",
      to: { type: "pageInfo" },
    },
    {
      name: "projects",
      title: "Projetos",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "project" },
        },
      ],
    },
  ],
}
