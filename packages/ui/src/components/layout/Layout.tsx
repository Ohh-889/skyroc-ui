import LayoutHeader from './LayoutHeader';
import LayoutMain from './LayoutMain';
import LayoutRail from './LayoutRail';
import LayoutRoot from './LayoutRoot';
import LayoutSidebar from './LayoutSidebar';
import type { LayoutProps } from './types';

const Layout = ({
  children,
  collapsedSidebarWidth,
  collapsible = 'offcanvas',
  defaultOpen,
  header,
  onOpenChange,
  open,
  side = 'left',
  sidebar,
  sidebarWidth,
  size = 'md',
  ui,
  variant = 'sidebar'
}: LayoutProps) => {
  return (
    <LayoutRoot
      className={ui?.root}
      collapsedSidebarWidth={collapsedSidebarWidth}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      open={open}
      side={side}
      sidebarWidth={sidebarWidth}
      size={size}
      variant={variant}
      onOpenChange={onOpenChange}
    >
      <LayoutSidebar
        collapsible={collapsible}
        side={side}
        size={size}
        ui={ui}
        variant={variant}
      >
        {typeof sidebar === 'function'
          ? props => (
            <>
              {sidebar(props)}

              <LayoutRail
                className={ui?.rail}
                collapsible={collapsible}
                side={side}
                variant={variant}
              />
            </>
          )
          : (
            <>
              {sidebar}

              <LayoutRail
                className={ui?.rail}
                collapsible={collapsible}
                side={side}
                variant={variant}
              />
            </>
          )}
      </LayoutSidebar>

      <LayoutMain
        className={ui?.main}
        collapsible={collapsible}
        variant={variant}
      >
        <LayoutHeader className={ui?.header}>{header}</LayoutHeader>
        {children}
      </LayoutMain>
    </LayoutRoot>
  );
};

export default Layout;
