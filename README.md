# Start development

```sh
npm run dev
```


# Documentation

Project stack

- Next.js: A popular framework for building server-rendered React applications.
- Tailwind CSS: A highly customizable CSS framework for building modern UI components.
- Redux Toolkit: A powerful toolset for managing state in Redux, including simplified configuration and automatic handling of common tasks.
- Axios: A promise-based HTTP client for making API requests.
- Google Analytics: Integrated with Google Analytics for tracking user analytics and insights.

# Git branching

The simple convention for branch naming in *kebab-case* with component/feature/bugfix prefix.

```
  > component/some-huge-features
  > feature/some-feature-name
  > bugfix/bug-name
  > hotfix/description
              
```

# Style Guidelines
## Project structure

```
  > components
    > footer
    > pages
      > home
        
  > pages
    index.tsx [all pages of the project]
```



| Folder           | Purpose                                                                                           |
| -----------------| --------------------------------------------------------------------------------------------------|
| /components       | Shared components that can be used across the whole application                                  |
| /components/pages | Shared components that can be used in scope of one page                                          |
| /consts     | Reusable constants                                                                                     |
| /pages      | Main pages in the project (for now we have only one page as it is landing)                             |

---

## Components

### 1. Barrel file

We are using barrel rule for all the components. Each folder contain index.ts file which exports one or more components.
```
index.ts

export * from './component-name.tsx';
```
You can read more about barrel files [here](https://medium.com/suyeonme/barrel-adding-barrel-into-typescript-7141a6ac9003).

### 2. Structure

Component consist with *tsx* and *scss* (if needed) files. If your component is large, you can decompose some of the parts with nested folders.

```
Structure of the component:

  > hero-section.tsx
  > hero-section.module.scss
  > index.ts

  > hero-header
    > hero-header.tsx
    > index.ts
```
